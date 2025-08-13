import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile_pic from "../assets/profile_pic.png";
import { slideInFromRight } from "../utils/animations";

const commands = [
  ":intro --display --format=modern",
  "i", // Enter insert mode
];

export default function Intro() {
  const [titleText, setTitleText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhase, setCurrentPhase] = useState("command"); // "command", "title", "body", "edit", "complete"
  const [commandText, setCommandText] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [vimMode, setVimMode] = useState("NORMAL");

  const fullTitle = "Introduction";
  const fullBody =
    "A Software Engineer in the age of frameworks and full-stack developers — focused on building with purpose, not just gluing pieces together.";

  useEffect(() => {
    // Command typing phase
    if (currentPhase === "command") {
      let commandIndex = 0;
      let charIndex = 0;

      const typeCommand = () => {
        if (commandIndex < commands.length) {
          const currentCommand = commands[commandIndex];
          if (charIndex < currentCommand.length) {
            setCommandText(currentCommand.slice(0, charIndex + 1));
            charIndex++;
            setTimeout(typeCommand, 80);
          } else {
            setTimeout(() => {
              if (commandIndex === 0) {
                // After first command, clear and start next
                setCommandText("");
                commandIndex++;
                charIndex = 0;
                setTimeout(typeCommand, 300);
              } else {
                // After 'i' command, enter insert mode
                setVimMode("INSERT");
                setCommandText("");
                setTimeout(() => setCurrentPhase("title"), 200);
              }
            }, 500);
          }
        }
      };

      typeCommand();
    }

    // Title typing animation
    if (currentPhase === "title") {
      let i = 0;
      const titleTimer = setInterval(() => {
        if (i < fullTitle.length) {
          setTitleText(fullTitle.slice(0, i + 1));
          i++;
        } else {
          clearInterval(titleTimer);
          setTimeout(() => setCurrentPhase("body"), 300);
        }
      }, 120);

      return () => clearInterval(titleTimer);
    }

    // Body typing animation
    if (currentPhase === "body") {
      let i = 0;
      const bodyTimer = setInterval(() => {
        if (i < fullBody.length) {
          setBodyText(fullBody.slice(0, i + 1));
          i++;
        } else {
          clearInterval(bodyTimer);
          setTimeout(() => setCurrentPhase("edit"), 800);
        }
      }, 35);

      return () => clearInterval(bodyTimer);
    }

    // Vim editing operations
    if (currentPhase === "edit") {
      const editSequence = async () => {
        // Escape to normal mode
        setVimMode("NORMAL");
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Visual select a word
        setVimMode("VISUAL");
        setSelectedText("frameworks");
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Clear selection and go back to normal
        setSelectedText("");
        setVimMode("NORMAL");
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Save file
        setVimMode("COMMAND");
        await new Promise((resolve) => setTimeout(resolve, 300));
        setVimMode("NORMAL");

        setCurrentPhase("complete");
      };

      editSequence();
    }

    // Cursor blinking
    if (currentPhase === "complete") {
      const cursorTimer = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 600);

      return () => clearInterval(cursorTimer);
    }
  }, [currentPhase]);

  const renderTextWithSelection = (text: string, selectedWord: string) => {
    if (!selectedWord || !text.includes(selectedWord)) {
      return text;
    }

    const parts = text.split(selectedWord);
    return (
      <>
        {parts[0]}
        <span className="bg-blue-500/50 text-white px-1 rounded">
          {selectedWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="pt-32 sm:pt-40 lg:pt-50 pb-16 sm:pb-24 px-4 sm:px-6 relative">
      {/* Vim-inspired background elements */}
      <div className="hidden sm:block absolute top-32 sm:top-40 left-4 sm:left-10 text-slate-700/30 font-mono text-xs sm:text-sm">
        <div>1 | Introduction</div>
        <div>2 | Software Engineer</div>
        <div>3 | Building with purpose</div>
        <div className="text-green-500/40">~</div>
        <div className="text-green-500/40">~</div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6 relative order-2 lg:order-1"
        >
          {/* Vim command line inspiration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-green-400/60 text-xs sm:text-sm mb-4 h-6"
          >
            {commandText}
            {currentPhase === "command" && (
              <span className="inline-block w-2 h-5 bg-green-400/80 ml-1 align-text-bottom"></span>
            )}
          </motion.div>

          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight relative">
              {titleText}
              {currentPhase === "title" && (
                <span className="inline-block w-2 sm:w-3 h-10 sm:h-12 lg:h-16 bg-green-400/80 ml-1 align-bottom"></span>
              )}
            </h1>
          </div>

          <div className="relative">
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed relative min-h-[3rem] sm:min-h-[4rem]">
              {renderTextWithSelection(bodyText, selectedText)}
              {currentPhase === "body" && (
                <span className="inline-block w-2 h-5 sm:h-6 bg-green-400/80 ml-1 align-text-bottom"></span>
              )}
              {currentPhase === "complete" && (
                <span
                  className={`inline-block w-2 h-5 sm:h-6 ml-1 align-text-bottom ${
                    showCursor ? "bg-green-400/80" : "bg-transparent"
                  }`}
                ></span>
              )}
            </p>
          </div>

          {/* Vim-inspired status line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: currentPhase !== "command" ? 1 : 0 }}
            transition={{ delay: 1 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm text-slate-400 mt-4 sm:mt-6"
          >
            <span
              className={`${
                vimMode === "INSERT"
                  ? "text-green-400"
                  : vimMode === "VISUAL"
                  ? "text-yellow-400"
                  : vimMode === "COMMAND"
                  ? "text-blue-400"
                  : "text-slate-400"
              }`}
            >
              -- {vimMode} --
            </span>
            <span className="ml-2 sm:ml-4">
              Line{" "}
              {currentPhase === "body" || currentPhase === "complete" ? 2 : 1},
              Col {currentPhase === "body" ? bodyText.length : titleText.length}
            </span>
            <span className="ml-2 sm:ml-4 text-blue-400">portfolio.jsx</span>
            {vimMode === "COMMAND" && (
              <span className="ml-2 sm:ml-4 text-green-400">:w saved</span>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.5,
          }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
            {/* Vim-inspired window frame */}
            <div className="absolute -top-6 sm:-top-8 left-0 right-0 bg-slate-800 border border-slate-700 rounded-t-lg px-3 sm:px-4 py-2 font-mono text-xs text-slate-400">
              <span className="text-green-400">●</span> profile_pic.png
            </div>

            <div className="absolute inset-0 bg-slate-600/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 overflow-hidden">
              <img
                src={profile_pic}
                alt="Mo Khattab"
                className="w-64 h-80 sm:w-72 sm:h-90 lg:w-80 lg:h-96 object-cover object-center rounded-lg mx-auto"
              />

              {/* Vim line numbers overlay */}
              <div className="absolute left-2 top-4 sm:top-6 font-mono text-xs text-slate-600 space-y-3 sm:space-y-4">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
