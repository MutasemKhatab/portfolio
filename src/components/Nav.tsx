export default function Nav() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 100; // Account for navbar height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="[font-family:'Cookie'] leading-7 text-4xl -rotate-12 text-slate-100 hover:text-slate-300 transition-colors cursor-pointer relative">
          Mo
          <br />
          Khattab
          {/* Vim cursor */}
          <div className="absolute -right-2 top-0 w-2 h-8 bg-green-400/70 animate-pulse"></div>
        </div>
        <div className="flex space-x-8">
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "about")}
            className="text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium relative group font-mono"
          >
            :about
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, "skills")}
            className="text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium relative group font-mono"
          >
            :skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#education"
            onClick={(e) => handleSmoothScroll(e, "education")}
            className="text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium relative group font-mono"
          >
            :education
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="text-slate-300 hover:text-slate-100 transition-colors duration-300 font-medium relative group font-mono"
          >
            :contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
