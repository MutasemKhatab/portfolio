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
      <div className="relative w-80 h-80 mx-auto perspective">
        <div className="w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180 cursor-pointer">
          {/* Front (Image) */}
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center  rounded-2xl shadow-xl border border-gray-800 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center">
              <img
                src={frontImage}
                alt={frontImageAlt}
                className="w-56 h-56 object-contain mx-auto mb-4"
              />
            </div>
          </div>
          {/* Back (Details) */}
          <div
            className={`absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-slate-700 rounded-2xl shadow-xl p-6 text-white`}
          >
            <p className="text-center leading-relaxed">{description}</p>
            <div className="mt-4 flex items-center space-x-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  isCompleted ? "bg-green-500" : "bg-blue-500"
                }
                    ${!isCompleted ? "animate-pulse" : ""}`}
              ></div>
              <span className="text-sm font-semibold">
                {isCompleted ? "Completed" : "Currently Enrolled"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
