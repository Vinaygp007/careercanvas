"use client";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import { traitLabels } from "../page";
type Trait = keyof typeof traitLabels;

const traitNarratives: Record<Trait, string> = {
  logic: "You excel at analyzing problems, making decisions based on facts, and finding logical solutions. You thrive in roles that require critical thinking and data-driven approaches.",
  feeling: "You are empathetic and value harmony. You excel in roles that require understanding others, supporting people, and building positive relationships.",
  team: "You work best in collaborative environments, enjoy sharing ideas, and contribute to group success. Team-oriented roles are your strength.",
  independent: "You are self-motivated and enjoy working autonomously. You thrive in roles that give you freedom and responsibility.",
  structure: "You appreciate order, organization, and clear processes. Structured environments help you perform at your best.",
  flexibility: "You adapt quickly to change and enjoy variety. Flexible roles that offer new challenges keep you engaged.",
  bigpicture: "You see the overall vision and connect ideas. Strategic and visionary roles are a great fit for you.",
  detail: "You notice the small things others miss. Detail-oriented roles that require accuracy and precision suit you well.",
  routine: "You value stability and predictability. Roles with clear routines and expectations are ideal for you.",
  variety: "You seek excitement and new experiences. Dynamic roles with lots of variety keep you motivated.",
  lead: "You are a natural leader, comfortable taking charge and inspiring others. Leadership roles are your calling.",
  support: "You enjoy helping others succeed and providing assistance. Supportive roles are where you shine.",
  plan: "You are organized and like to plan ahead. Roles that require foresight and preparation are a great match.",
  spontaneous: "You are energetic and act on opportunities. Spontaneous roles that allow quick decisions suit you.",
  data: "You are analytical and enjoy working with numbers and information. Data-driven roles are your strength.",
  people: "You are outgoing and enjoy interacting with others. People-focused roles are ideal for you."
};
import { FaMedal, FaUserTie, FaLightbulb, FaStar, FaShareAlt, FaArrowRight } from "react-icons/fa";

// Helper to parse trait scores from query string
function parseTraitScores(params: URLSearchParams) {
  const scores: { [key: string]: number } = {};
  for (const [key, value] of params.entries()) {
    if (!isNaN(Number(value))) scores[key] = Number(value);
  }
  return scores;
}

function getUnsureCount(searchParams: URLSearchParams) {
  // The test page encodes unsure answers as 'unsure' in the query string, so count them
  // We'll assume the test page sends an 'unsureCount' param if unsure answers were picked
  const unsure = searchParams.get('unsureCount');
  return unsure ? Number(unsure) : 0;
}

const traitToCareers: { [key: string]: string[] } = {
  logic: ["Engineer", "Data Analyst", "Scientist", "Software Developer"],
  feeling: ["Counselor", "Nurse", "Teacher", "HR Specialist"],
  team: ["Project Manager", "Team Lead", "Coach", "Consultant"],
  independent: ["Freelancer", "Researcher", "Writer", "Designer"],
  structure: ["Accountant", "Administrator", "Operations Manager"],
  flexibility: ["Entrepreneur", "Consultant", "Creative Director"],
  bigpicture: ["Strategist", "Entrepreneur", "Product Manager"],
  detail: ["Quality Analyst", "Editor", "Auditor"],
  routine: ["Banker", "Librarian", "Clerk"],
  variety: ["Event Planner", "Sales", "Marketing Specialist"],
  lead: ["Executive", "Director", "Startup Founder"],
  support: ["Assistant", "Support Specialist", "Customer Service"],
  plan: ["Planner", "Architect", "Supply Chain Manager"],
  spontaneous: ["Performer", "Sales Rep", "Travel Blogger"],
  data: ["Data Scientist", "Statistician", "Market Researcher"],
  people: ["Therapist", "Sales Manager", "Community Manager"]
};

function getTopCareers(traits: [string, number][]) {
  const topTraits = traits.slice(0, 3).map(([trait]) => trait);
  const careers = topTraits.flatMap(trait => traitToCareers[trait] || []);
  return careers.slice(0, 6);
}

function getCareerLink(career: string) {
  // Use O*NET or Wikipedia for career exploration
  const query = encodeURIComponent(career + ' career');
  return `https://www.google.com/search?q=${query}`;
}

  export default function ResultPage() {
    const searchParams = useSearchParams();
    const traitScores = parseTraitScores(searchParams);
    const sortedTraits = Object.entries(traitScores)
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1]);
    const topCareers = getTopCareers(sortedTraits);
    const topTrait = sortedTraits[0]?.[0] as Trait | undefined;
    const unsureCount = getUnsureCount(searchParams);
    const totalQuestions = 25; // Update if you change the number of questions
    const unsureRatio = unsureCount / totalQuestions;
  
    return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#eaf3fc] to-white dark:from-[#0a1a2f] dark:to-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full max-w-2xl rounded-3xl bg-white/90 dark:bg-gray-900/90 shadow-2xl backdrop-blur-lg px-8 py-14 flex flex-col items-center border border-white/40 dark:border-gray-800/60"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x flex items-center gap-2">
          <FaMedal className="text-yellow-400 animate-bounce" />
          Your Work Personality Profile
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 text-center max-w-xl">
          Based on your answers, here are your dominant work personality traits and matching career categories. Explore your strengths and see which careers fit you best!
        </p>
        {/* Clarity/Confidence Indicator */}
        {unsureCount > 0 && (
          <div className="w-full flex flex-col items-center gap-2 mb-4">
            <div className={`w-full max-w-lg rounded-xl p-4 shadow text-center ${unsureRatio > 0.4 ? 'bg-red-100 text-red-700 dark:bg-red-900/40' : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/40'}`}>
              {unsureRatio > 0.4 ? (
                <>
                  <strong>Many of your answers were "Can't Decide?"</strong><br />
                  For clearer results, try to answer more decisively next time!
                </>
              ) : (
                <>
                  <strong>Some answers were "Can't Decide?"</strong><br />
                  The more decisive your answers, the more accurate your career match!
                </>
              )}
            </div>
          </div>
        )}
        {/* Narrative summary for top trait */}
        {topTrait && (
          <div className="w-full flex flex-col items-center gap-2 mb-8">
            <div className="w-full max-w-lg bg-gradient-to-r from-blue-50 to-pink-50 dark:from-blue-900/40 dark:to-pink-900/40 rounded-xl p-5 shadow animate-gradient-x">
              <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-pink-300 text-center">Personalized Summary</h3>
              <p className="text-base text-gray-700 dark:text-gray-200 text-center">{topTrait !== undefined ? traitNarratives[topTrait] : ""}</p>
            </div>
          </div>
        )}
        <div className="w-full flex flex-col items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {sortedTraits.slice(0, 3).map(([trait, score]) => (
              <span key={trait} className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow animate-glow text-base flex items-center gap-2">
                <FaStar className="text-yellow-300" />
                {traitLabels[trait as Trait]} ({score})
              </span>
            ))}
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mt-4">
            {sortedTraits.slice(0, 6).map(([trait, score]) => (
              <div key={trait} className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-pink-100 dark:from-blue-900 dark:to-pink-900 rounded-xl p-5 shadow animate-gradient-x w-full">
                <span className="text-xl font-bold text-blue-700 dark:text-pink-300 mb-1">{traitLabels[trait as Trait]}</span>
                <span className="text-3xl font-extrabold text-blue-600 dark:text-pink-400">{score}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-2 mb-8">
          <span className="text-lg text-gray-600 dark:text-gray-300 font-semibold flex items-center gap-2">
            <FaUserTie className="text-blue-500" /> Top Career Matches:
          </span>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {topCareers.map((career) => (
              <a
                key={career}
                href={getCareerLink(career)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow animate-glow text-sm flex items-center gap-2 hover:underline hover:scale-105 transition-transform"
                title={`Explore ${career} careers`}
              >
                <FaArrowRight className="text-white" /> {career}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-2 mb-4">
          <span className="text-base text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <FaLightbulb className="text-yellow-400" />
            {topTrait ? (
              <>
                You are strongest in <span className="font-bold text-blue-700 dark:text-pink-300">{traitLabels[topTrait as Trait]}</span> roles. Consider careers that let you use this strength every day!
              </>
            ) : (
              "Explore your unique strengths!"
            )}
          </span>
        </div>
        <div className="w-full flex flex-col items-center gap-2 mt-6">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg"
            onClick={() => window.print()}
          >
            <FaShareAlt /> Share or Print Your Result
          </button>
        </div>
      </motion.div>
    </main>
  );
}
