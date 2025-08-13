import type { TechImageProps } from "../types/skills";

export const TechImage = ({
  icon,
  label,
  size = "md",
  className = "",
  style = {},
}: TechImageProps) => {
  const sizeClasses = {
    sm: "w-6 h-6 sm:w-8 sm:h-8",
    md: "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12",
    lg: "w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16",
  };

  return (
    <div
      className={`
        absolute transform transition-all duration-300 
        hover:scale-125 hover:z-30 z-10 
        ${sizeClasses[size]} ${className}
      `}
      style={{
        animation: `float 8s ease-in-out infinite alternate`,
        ...style,
      }}
      title={label}
    >
      <div className="w-full h-full flex items-center justify-center filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 hover:brightness-125">
        {icon}
      </div>
    </div>
  );
};
