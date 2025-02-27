import React from "react";
import { Image, ImageProps } from "react-native";

interface ResponsiveImageProps extends Omit<ImageProps, "width" | "height"> {
  width?: number | string; // Width as number or Tailwind width class
  height?: number | string; // Height as number or Tailwind height class
  resizeMode?: "cover" | "contain" | "stretch" | "center" | "repeat"; // Default 'cover'
  className?: string; // Tailwind classes for the Image
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  source,
  width = "full", // Default to full width
  height = "auto", // Default to auto height
  resizeMode = "cover",
  className = "", // Add className prop
  ...rest
}) => {
  const widthClass =
    typeof width === "number"
      ? `w-[${width}px]`
      : width === "auto"
      ? ""
      : width === "full"
      ? "w-full"
      : width; // Handle number or Tailwind class
  const heightClass =
    typeof height === "number"
      ? `h-[${height}px]`
      : height === "auto"
      ? ""
      : height === "full"
      ? "h-full"
      : height; // Handle number or Tailwind class

  return (
    <Image
      source={source}
      className={`${widthClass} ${heightClass} ${className}`} // Combine all classes
      resizeMode={resizeMode}
      {...rest}
    />
  );
};

// Example Usage:

// <ResponsiveImage source={IMAGES.LOGO} width={200} height={100} /> // Fixed width and height
// <ResponsiveImage source={IMAGES.IMAGE} width="full" /> // Full width, auto height
// <ResponsiveImage source={IMAGES.PROFILE} width="w-1/2" height="h-32" resizeMode="contain" /> // Tailwind classes
// <ResponsiveImage source={IMAGES.NEWS} width="w-48" height="auto" /> // Tailwind width, auto height
// <ResponsiveImage source={IMAGES.ADAPTIVE_ICON} width={150} height="h-48" resizeMode="stretch" /> //Mixed number and tailwind class
// <ResponsiveImage source={IMAGES.SPLASH_ICON} width="full" height="full" resizeMode="contain" /> //Cover full screen

// <ResponsiveImage source={IMAGES.LOGO} className="rounded-lg shadow-md" width={200} height={100} /> // Add custom Tailwind classes
