import type { TechImageProps } from "../types/skills";

export const TechImage = ({
  icon,
  label,
  size = "md",
  className = "",
  style = {},
}: TechImageProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
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
