import React from "react";
import { View, ViewProps } from "react-native";

interface FlexProps extends ViewProps {
  direction?: "row" | "column";
  gap?: number; // Gap between items
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  wrap?: boolean; // Whether to allow wrapping
  style?: any; // Add this line to fix the type error
}

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  gap = 0,
  justify = "start",
  align = "stretch",
  wrap = false,
  style, // Existing style prop
  ...rest // All other View props
}) => {
  const directionClass = direction === "row" ? "flex-row" : "flex-col";
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  }[justify];

  const alignItemsClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  }[align];

  const gapClass = `gap-${gap}`; // Dynamic gap class

  const wrapClass = wrap ? "flex-wrap" : "flex-nowrap";

  return (
    <View
      className={`flex ${directionClass} ${justifyClass} ${alignItemsClass} ${gapClass} ${wrapClass} ${
        style?.className || ""
      }`}
      style={style?.style}
      {...rest}
    />
  );
};
