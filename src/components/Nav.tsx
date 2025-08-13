import React, { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu on link click
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // Reduced for mobile
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo */}
          <div className="[font-family:'Cookie'] leading-7 text-2xl sm:text-4xl -rotate-12 text-slate-100 hover:text-slate-300 transition-colors cursor-pointer relative">
            <span className="block sm:hidden">MK</span>
            <span className="hidden sm:block">
              Mo
              <br />
              Khattab
            </span>
            {/* Vim cursor */}
            <div className="absolute -right-1 sm:-right-2 top-0 w-1 sm:w-2 h-6 sm:h-8 bg-green-400/70 animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium relative group font-mono text-sm lg:text-base"
            >
              :about
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "skills")}
              className="text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium relative group font-mono text-sm lg:text-base"
            >
              :skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#education"
              onClick={(e) => handleSmoothScroll(e, "education")}
              className="text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium relative group font-mono text-sm lg:text-base"
            >
              :education
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium relative group font-mono text-sm lg:text-base"
            >
              :contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative font-mono">
              {isMenuOpen ? "✕" : "≡"}
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50 rounded-b-lg mb-2">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="block text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium font-mono py-2"
              >
                :about
              </a>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, "skills")}
                className="block text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium font-mono py-2"
              >
                :skills
              </a>
              <a
                href="#education"
                onClick={(e) => handleSmoothScroll(e, "education")}
                className="block text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium font-mono py-2"
              >
                :education
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="block text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium font-mono py-2"
              >
                :contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
