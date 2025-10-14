import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black border-t border-gray-200 dark:border-gray-800 py-10 px-4 mt-12 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 md:mb-0">
          CareerCanvas
        </div>
        <div className="flex gap-6 text-gray-500 dark:text-gray-400 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 dark:hover:text-pink-400 transition-colors"><FaFacebook /></a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-600 dark:hover:text-pink-400 transition-colors"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 dark:hover:text-pink-400 transition-colors"><FaLinkedin /></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-600 dark:hover:text-pink-400 transition-colors"><FaTwitter /></a>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        &copy; {new Date().getFullYear()} CareerCanvas. All rights reserved.
      </div>
    </footer>
  );
}
