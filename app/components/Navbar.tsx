import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <header
      className="d-f fs-sm fw-w py-3 sm:fw-nw sm:jc-fs w-full"
      style={{ backgroundColor: "#1a1c22" }}
    >
      <nav className="mx-auto px-4 sm:ai-c sm:d-f sm:jc-sb w-full">
        <div className="ai-c d-f jc-sb">
          <Image
            alt="Logo"
            className="h-auto"
            height={140}
            src="/logo.png"
            width={140}
          />
          <div className="sm:d-none">
            <button
              className="c-p ai-c b-1 bc-l-silver-6 bs-sm cg-2 d-if jc-c p-2 rad-2 tc-white"
              style={{ backgroundColor: "#1a1c22" }}
              onClick={toggleDropdown}
            >
              <svg
                className="dim-4 fs-0"
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className="d-f fd-c g-5 sm:ai-c sm:fd-r sm:jc-fe sm:pl-5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <a
                className="fw-500 h:tc-l-gray-6 tc-white"
                href="https://www.yummacss.com/docs/installation"
              >
                Docs
              </a>
              <a
                className="fw-500 h:tc-l-gray-6 tc-white"
                href="https://www.yummacss.com/components"
              >
                Components
              </a>
              <a
                className="fw-500 h:tc-l-gray-6 tc-white"
                href="https://www.yummacss.com/blog"
              >
                Blog
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
