import React from "react";
import { Text, TextProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ThemedTextProps extends TextProps {
  children: React.ReactNode;
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title1"
    | "title2"
    | "title3"
    | "subtitle1"
    | "subtitle2"
    | "body"
    | "caption"
    | "link"
    | "bold"
    | "italic";
  style?: any;
}

export const Typography: React.FC<ThemedTextProps> = ({
  style,
  lightColor,
  darkColor,
  type = "default",
  children,
  ...rest
}) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const styles = {
    default: "text-base leading-6",
    title1: "text-5xl font-bold leading-10",
    title2: "text-4xl font-bold leading-8",
    title3: "text-3xl font-bold leading-7",
    subtitle1: "text-2xl font-semibold leading-7",
    subtitle2: "text-xl font-semibold leading-6",
    body: "text-base leading-6",
    caption: "text-sm leading-5",
    link: "text-base leading-6 text-[#0a7ea4] underline",
    bold: "font-bold",
    italic: "italic",
  };

  const classes = type
    .split(" ")
    .map((t) => styles[t as keyof typeof styles] || styles.default)
    .join(" ");

  return (
    <Text
      className={`${classes} ${style?.className || ""} font-SpaceMono`}
      style={[{ color }, style?.style]}
      {...rest}
    >
      {children}
    </Text>
  );
};
