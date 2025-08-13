import React from "react";

// Define types for our floating tech components
export interface TechImageProps {
  icon: React.ReactNode;
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}

export interface FloatingImagesClusterProps {
  icons: TechIconData[];
  className?: string;
  color: string;
}

export interface TechIconData {
  icon: React.ReactNode;
  label: string;
  size: "sm" | "md" | "lg";
}

export type SkillCategory = "frontend" | "backend" | "devops";

export type Position = [number, number, number]; // [x, y, rotation]
