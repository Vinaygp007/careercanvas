"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaClock, FaUserTie, FaStar, FaLightbulb, FaGoogle, FaCheckCircle, FaRegQuestionCircle } from "react-icons/fa";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";
import { app, db } from "../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";


// Each question is mapped to a trait axis and direction
type Trait = "logic" | "feeling" | "team" | "independent" | "structure" | "flexibility" | "bigpicture" | "detail" | "routine" | "variety" | "lead" | "support" | "plan" | "spontaneous" | "data" | "people";

export const traitLabels: { [key in Trait]: string } = {
	logic: "Logical/Analytical",
	feeling: "Empathetic/Feeling",
	team: "Team-Oriented",
	independent: "Independent",
	structure: "Structured",
	flexibility: "Flexible",
	bigpicture: "Big Picture",
	detail: "Detail-Oriented",
	routine: "Routine-Loving",
	variety: "Variety-Seeking",
	lead: "Leader",
	support: "Supporter",
	plan: "Planner",
	spontaneous: "Spontaneous",
	data: "Data-Focused",
	people: "People-Focused",
};

const traitMap: { [key: number]: { axis: Trait[], direction: ("a"|"b")[] } } = {
	0: { axis: ["logic", "feeling"], direction: ["a", "b"] },
	1: { axis: ["independent", "team"], direction: ["a", "b"] },
	2: { axis: ["structure", "flexibility"], direction: ["a", "b"] },
	3: { axis: ["plan", "spontaneous"], direction: ["a", "b"] },
	4: { axis: ["routine", "variety"], direction: ["a", "b"] },
	7: { axis: ["routine", "variety"], direction: ["a", "b"] },
	8: { axis: ["people", "data"], direction: ["a", "b"] },
	9: { axis: ["bigpicture", "detail"], direction: ["a", "b"] },
	10: { axis: ["logic", "feeling"], direction: ["a", "b"] },
	11: { axis: ["structure", "flexibility"], direction: ["a", "b"] },
	12: { axis: ["lead", "support"], direction: ["a", "b"] },
	13: { axis: ["plan", "spontaneous"], direction: ["a", "b"] },
	14: { axis: ["routine", "variety"], direction: ["a", "b"] },
	15: { axis: ["independent", "team"], direction: ["a", "b"] },
	16: { axis: ["bigpicture", "detail"], direction: ["a", "b"] },
	17: { axis: ["logic", "feeling"], direction: ["a", "b"] },
	18: { axis: ["lead", "support"], direction: ["a", "b"] },
	19: { axis: ["people", "data"], direction: ["a", "b"] },
	20: { axis: ["plan", "spontaneous"], direction: ["a", "b"] },
	21: { axis: ["structure", "flexibility"], direction: ["a", "b"] },
	22: { axis: ["bigpicture", "detail"], direction: ["a", "b"] },
	23: { axis: ["lead", "support"], direction: ["a", "b"] },
	24: { axis: ["logic", "feeling"], direction: ["a", "b"] },
};

const questions = [
	{
		text: "When making decisions, you are more influenced by...",
		options: [
			{ label: "Facts, data, and logic", value: "logic" },
			{ label: "Feelings and emotional impact", value: "feelings" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You prefer to work...",
		options: [
			{ label: "Independently", value: "independent" },
			{ label: "As part of a team", value: "team" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "Your workspace is usually...",
		options: [
			{ label: "Organized and tidy", value: "organized" },
			{ label: "Creative and flexible", value: "creative" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "When faced with a challenge, you...",
		options: [
			{ label: "Analyze and plan", value: "analyze" },
			{ label: "Act and adapt", value: "adapt" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are most motivated by...",
		options: [
			{ label: "Achievement and results", value: "achievement" },
			{ label: "Purpose and meaning", value: "purpose" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You prefer instructions that are...",
		options: [
			{ label: "Clear and detailed", value: "detailed" },
			{ label: "Flexible and open-ended", value: "flexible" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "When learning something new, you...",
		options: [
			{ label: "Prefer step-by-step guidance", value: "step" },
			{ label: "Jump in and experiment", value: "experiment" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You handle deadlines by...",
		options: [
			{ label: "Planning ahead", value: "plan" },
			{ label: "Working best under pressure", value: "pressure" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are energized by...",
		options: [
			{ label: "Social interaction", value: "social" },
			{ label: "Quiet reflection", value: "quiet" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You prefer to focus on...",
		options: [
			{ label: "The big picture", value: "bigpicture" },
			{ label: "The details", value: "details" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "When solving problems, you...",
		options: [
			{ label: "Use logic and analysis", value: "logic" },
			{ label: "Rely on intuition", value: "intuition" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are more comfortable with...",
		options: [
			{ label: "Routine and predictability", value: "routine" },
			{ label: "Change and variety", value: "variety" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You prefer feedback that is...",
		options: [
			{ label: "Direct and constructive", value: "direct" },
			{ label: "Supportive and encouraging", value: "supportive" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are more likely to...",
		options: [
			{ label: "Stick to proven methods", value: "proven" },
			{ label: "Try new approaches", value: "new" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You value...",
		options: [
			{ label: "Stability and security", value: "stability" },
			{ label: "Growth and opportunity", value: "growth" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are more likely to...",
		options: [
			{ label: "Follow a schedule", value: "schedule" },
			{ label: "Go with the flow", value: "flow" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You prefer communication that is...",
		options: [
			{ label: "Brief and to the point", value: "brief" },
			{ label: "Detailed and expressive", value: "expressive" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are more likely to...",
		options: [
			{ label: "Take initiative", value: "initiative" },
			{ label: "Wait for direction", value: "wait" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are most satisfied when...",
		options: [
			{ label: "Tasks are completed", value: "completed" },
			{ label: "Ideas are explored", value: "explored" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You prefer to...",
		options: [
			{ label: "Work with data and facts", value: "data" },
			{ label: "Work with people and ideas", value: "people" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are more likely to...",
		options: [
			{ label: "Plan before acting", value: "plan" },
			{ label: "Act spontaneously", value: "spontaneous" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are more comfortable in...",
		options: [
			{ label: "Structured environments", value: "structured" },
			{ label: "Flexible environments", value: "flexible" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You prefer to...",
		options: [
			{ label: "Focus on one task at a time", value: "one" },
			{ label: "Multitask", value: "multi" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are more likely to...",
		options: [
			{ label: "Lead a group", value: "lead" },
			{ label: "Support the group", value: "support" },
			{ label: "Can't Decide?", value: "unsure" },
		],
	},
	{
		text: "You are more likely to...",
		options: [
			{ label: "Follow rules closely", value: "rules" },
			{ label: "Question or adapt rules", value: "adapt_rules" },
			{ label: "Can't Decide?", value: "unsure" },
		 ],
		},
		];

		export default function CareerTestPage() {
	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState<string[]>([]);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const q = questions[step];
	// const progress = ((step + 1) / questions.length) * 100;
	const router = useRouter();

	useEffect(() => {
		const auth = getAuth(app);
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	function handleGoogleSignIn() {
		const auth = getAuth(app);
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider).catch((err) => {
			alert("Sign in failed: " + err.message);
		});
	}

	function handleAnswer(val: string) {
		setAnswers([...answers, val]);
		if (step < questions.length - 1) setStep(step + 1);
	}

	// Calculate results if finished
	const isFinished = answers.length === questions.length;
	const traitScores: { [key in Trait]: number } = {
		logic: 0, feeling: 0, team: 0, independent: 0, structure: 0, flexibility: 0, bigpicture: 0, detail: 0, routine: 0, variety: 0, lead: 0, support: 0, plan: 0, spontaneous: 0, data: 0, people: 0
	};
	if (isFinished) {
		answers.forEach((ans, i) => {
			const map = traitMap[i];
			if (!map) return;
			if (ans === "unsure") return;
			if (ans === "a") traitScores[map.axis[0]] += 1;
			if (ans === "b") traitScores[map.axis[1]] += 1;
		});
	}

		// Removed duplicate handleSeeResult
		async function handleSeeResult() {
			// Build query string from traitScores
			const params = new URLSearchParams();
			Object.entries(traitScores).forEach(([trait, score]) => {
				params.set(trait, score.toString());
			});
			// Save to Firestore if user is signed in
			if (user) {
				try {
					await addDoc(collection(db, "answers"), {
						userId: user.uid,
						email: user.email,
						displayName: user.displayName,
						answers,
						traitScores,
						createdAt: Timestamp.now(),
					});
				} catch (e) {
					// Optionally handle error
					console.error("Error saving answers:", e);
				}
			}
			router.push(`/career-test/result?${params.toString()}`);
		}

	if (loading) {
		return (
			<main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#eaf3fc] to-white dark:from-[#0a1a2f] dark:to-black">
				<div className="text-xl font-bold text-gray-700 dark:text-gray-200 animate-pulse">Loading...</div>
			</main>
		);
	}

	if (!user) {
		return (
			<main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#eaf3fc] to-white dark:from-[#0a1a2f] dark:to-black">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl px-10 py-12 flex flex-col items-center border border-white/40 dark:border-gray-800/60"
				>
					<h1 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x text-center">Sign in to Start Assessment</h1>
					<p className="mb-8 text-gray-700 dark:text-gray-200 text-center">Please sign in with your Google account to begin the career assessment.</p>
					<button
						onClick={handleGoogleSignIn}
						className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold text-lg shadow-lg animate-glow focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-pink-400"
					>
						<FaGoogle className="text-xl" /> Sign in with Google
					</button>
				</motion.div>
			</main>
		);
	}

		return (
			<main className="relative min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-[#eaf3fc] to-white dark:from-[#0a1a2f] dark:to-black overflow-x-hidden">
				{/* Animated background gradient */}
				<motion.div
					className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-100/40 via-pink-100/30 to-purple-100/40 dark:from-blue-900/30 dark:via-pink-900/20 dark:to-purple-900/30 blur-2xl z-0 pointer-events-none"
					animate={{ opacity: [0.7, 1, 0.7] }}
					transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
				/>
				{/* Floating animated shapes for wow effect */}
				<motion.div
					className="absolute left-2 top-2 sm:left-10 sm:top-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-400 to-purple-300 rounded-full blur-2xl opacity-40 animate-pulse z-0"
					animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
					transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
				/>
				<motion.div
					className="absolute right-2 bottom-2 sm:right-10 sm:bottom-10 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-pink-400 to-blue-300 rounded-full blur-2xl opacity-30 animate-pulse z-0"
					animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
					transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
				/>
				{/* Sticky header with animated progress circles */}
				<header className="w-full sticky top-0 z-30 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-transparent shadow-[0_4px_32px_0_rgba(99,102,241,0.08)]">
					<div className="max-w-4xl mx-auto flex flex-col items-center justify-center px-2 sm:px-6 py-3 sm:py-4 gap-2">
						<div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 sm:gap-0">
							<span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">CareerCanvas</span>
							<span className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-200">
								<FaClock className="text-blue-500" /> 3–9 min
								<FaUserTie className="sm:ml-6 text-pink-500" /> 1000+ careers
								<FaStar className="sm:ml-6 text-yellow-400" /> 4.9/5
							</span>
						</div>
						{/* Animated progress circles */}
						<div className="flex items-center gap-1 sm:gap-2 mt-2">
							{Array.from({ length: questions.length }).map((_, i) => (
								<motion.div
									key={i}
									className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 ${i <= step ? 'bg-gradient-to-r from-blue-600 to-pink-500 border-blue-400 animate-glow' : 'bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700'}`}
									animate={i === step ? { scale: [1, 1.3, 1] } : { scale: 1 }}
									transition={{ duration: 0.6, repeat: i === step ? Infinity : 0, repeatType: 'reverse', ease: 'easeInOut' }}
								/>
							))}
						</div>
					</div>
				</header>

				{/* Main animated question card or result screen */}
				<section className="flex-1 w-full flex flex-col items-center justify-center py-8 sm:py-16 px-2 sm:px-4">
					<div className="max-w-xs sm:max-w-xl w-full mx-auto">
						{!isFinished ? (
							<>
								{/* Question indicator above icon */}
								<div className="flex flex-col items-center justify-center mb-4 gap-0 relative">
									<span className="inline-flex items-center gap-2 px-3 sm:px-5 py-1 rounded-full bg-gradient-to-r from-blue-100 to-pink-100 dark:from-blue-900 dark:to-pink-900 text-blue-700 dark:text-pink-300 font-semibold text-base sm:text-lg shadow animate-gradient-x z-20" style={{ fontWeight: 700 }}>
										<FaLightbulb className="text-yellow-400 animate-pulse" />
										<span className="text-blue-700 dark:text-pink-200">Question {step + 1} of {questions.length}</span>
									</span>
								</div>
								<AnimatePresence mode="wait">
									<motion.div
										key={step}
										initial={{ opacity: 0, y: 40, scale: 0.96, rotateY: 20 }}
										animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
										exit={{ opacity: 0, y: -40, scale: 0.96, rotateY: -20 }}
										transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
										className="relative z-10 w-full rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-gray-900/90 shadow-2xl backdrop-blur-lg px-3 sm:px-8 py-8 sm:py-12 flex flex-col items-center border border-white/40 dark:border-gray-800/60"
									>
										<motion.h2
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.2, duration: 0.7 }}
											className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
										>
											{q.text}
										</motion.h2>
										<div className="flex flex-col gap-4 sm:gap-6 w-full mt-2 sm:mt-4">
											{q.options.map((opt, i) => (
												<motion.button
													key={opt.value}
													whileHover={{ scale: 1.08, boxShadow: opt.value === 'unsure' ? '0 0 0 2px #a21caf55' : '0 0 24px #2563eb55, 0 0 48px #ec489955' }}
													whileTap={{ scale: 0.97 }}
													onClick={() => handleAnswer(i === 0 ? 'a' : i === 1 ? 'b' : 'unsure')}
													className={`w-full flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-5 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg border-2 border-white/30 dark:border-gray-800/40 backdrop-blur-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-pink-400
														${opt.value === 'unsure'
															? 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-500 border-2 border-pink-300 dark:border-pink-700 relative group'
															: 'bg-gradient-to-r from-blue-600 to-pink-500 text-white animate-glow'}
													`}
												>
													{opt.value === 'unsure' ? <FaRegQuestionCircle className="text-xl sm:text-2xl" /> : <FaCheckCircle className="text-xl sm:text-2xl" />}
													{opt.label}
													{/* Tooltip for Can't Decide */}
													{opt.value === 'unsure' && (
														<span className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-pink-500 text-white text-xs rounded px-2 py-1 shadow transition-opacity duration-200 pointer-events-none">
															Choose if you feel unsure
														</span>
													)}
												</motion.button>
											))}
										</div>
									</motion.div>
								</AnimatePresence>
							</>
						) : (
							<div className="flex flex-col items-center justify-center w-full">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.97 }}
									onClick={handleSeeResult}
									className="mt-8 px-6 sm:px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold text-lg sm:text-xl shadow-lg animate-glow focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-pink-400"
								>
									See the Result
								</motion.button>
							</div>
						)}
					</div>
				</section>

				{/* Trust badges, reviews, and footer */}
				<footer className="w-full max-w-xs sm:max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6 py-6 sm:py-10 px-2">
					<div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
						<span className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base"><FaUserTie className="text-blue-500" /> Trusted by 500+ companies</span>
						<span className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base"><FaStar className="text-yellow-400" /> 4,494 Reviews</span>
					</div>
					<div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">&copy; {new Date().getFullYear()} CareerCanvas. All rights reserved.</div>
				</footer>
			</main>
		);
	}
