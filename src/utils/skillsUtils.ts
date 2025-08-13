import {
  backendPositions,
  devopsPositions,
  frontendPositions,
} from "../data/skillsData";
import type { Position, SkillCategory } from "../types/skills";

export const getFixedPositions = (
  iconCount: number,
  category: SkillCategory
): Position[] => {
  // Return the appropriate position set based on category
  if (category === "frontend") return frontendPositions;
  if (category === "backend") return backendPositions;
  if (category === "devops") return devopsPositions;

  // Fallback for unknown categories
  return frontendPositions.slice(0, iconCount);
};

export const determineCategory = (
  icons: Array<{ label: string }>
): SkillCategory => {
  if (!icons.length) return "frontend";

  const firstLabel = icons[0].label.toLowerCase();

  if (
    [
      "flutter",
      "html",
      "css",
      "javascript",
      "react",
      "next.js",
      "tailwind",
      "bootstrap",
      "typescript",
    ].includes(firstLabel)
  ) {
    return "frontend";
  }

  if (
    [
      ".net",
      "postgresql",
      "mysql",
      "mongodb",
      "node.js",
      "express",
      "php",
    ].includes(firstLabel)
  ) {
    return "backend";
  }

  return "devops";
};
