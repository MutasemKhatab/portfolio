import type { FloatingImagesClusterProps } from "../types/skills";
import { determineCategory, getFixedPositions } from "../utils/skillsUtils";
import { TechImage } from "./TechImage";

export const FloatingImagesCluster = ({
  icons,
  className = "",
  color,
}: FloatingImagesClusterProps) => {
  const category = determineCategory(icons);
  const positions = getFixedPositions(icons.length, category);

  const positionedIcons = icons.map((item, index) => {
    // Get the fixed position - no randomness whatsoever
    const [x, y, rotation] = positions[index] || [50, 50, 0];

    return {
      ...item,
      position: {
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotation}deg)`,
      },
    };
  });

  return (
    <div className={`relative h-56 w-full ${className}`}>
      {positionedIcons.map((item, index) => (
        <TechImage
          key={index}
          icon={item.icon}
          label={item.label}
          size={item.size || "md"}
          className={`hover:${color}`}
          style={item.position}
        />
      ))}
    </div>
  );
};
