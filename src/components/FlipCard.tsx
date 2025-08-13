interface FlipCardProps {
  frontImage: string;
  frontImageAlt: string;
  description: string;
  isCompleted: boolean;
}

export default function FlipCard({
  frontImage,
  frontImageAlt,
  description,
  isCompleted,
}: FlipCardProps) {
  return (
    <div className="education-card-container">
      {/* Expanded hover detection area */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto perspective group">
        {/* Invisible hover zone that's slightly larger */}
        <div className="absolute -inset-4 z-10 group-hover:bg-transparent"></div>

        <div className="w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 cursor-pointer relative z-20">
          {/* Front (Image) */}
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center p-4 sm:p-6">
              <img
                src={frontImage}
                alt={frontImageAlt}
                className={`w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-contain mx-auto mb-4 ${
                  frontImageAlt.includes("42")
                    ? "filter brightness-0 invert"
                    : ""
                }`}
              />
            </div>
          </div>
          {/* Back (Details) */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl p-4 sm:p-6 text-slate-100">
            <p className="text-center leading-relaxed text-slate-200 text-sm sm:text-base">
              {description}
            </p>
            <div className="mt-4 sm:mt-6 flex items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  isCompleted ? "bg-green-400" : "bg-blue-400"
                }
                    ${!isCompleted ? "animate-pulse" : ""}`}
              ></div>
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                {isCompleted ? "Completed" : "Currently Enrolled"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
