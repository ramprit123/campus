import React from "react";
import { LucideIcon } from "lucide-react-native"; // Import Lucide Icons
import {
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
  ActivityIndicator,
} from "react-native";

interface ButtonProps {
  title?: string; // Title is now optional
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean; // Add loading prop
  iconName?: string; // Add iconName prop
  iconSize?: number; // Icon size
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  style,
}) => {
  const buttonStyles = {
    primary: {
      backgroundColor: "#007AFF",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 8,
    },
    secondary: {
      backgroundColor: "#4CAF50",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 8,
    },
    outline: {
      backgroundColor: "transparent",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#007AFF",
    },
    text: {
      backgroundColor: "transparent",
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
  };

  const sizeStyles = {
    small: { fontSize: 14 },
    medium: { fontSize: 16 },
    large: { fontSize: 18 },
  };

  const textStyles = {
    primary: { color: "white" },
    secondary: { color: "white" },
    outline: { color: "#007AFF" },
    text: { color: "#007AFF" },
  };

  const combinedButtonStyle = [
    buttonStyles[variant],
    disabled || loading ? { opacity: 0.5 } : {},
    style,
  ];

  const combinedTextStyle = [textStyles[variant], sizeStyles[size]];

  return (
    <TouchableOpacity
      style={combinedButtonStyle}
      onPress={onPress}
      disabled={disabled || loading} // Disable while loading
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title && <Text style={combinedTextStyle}>{title}</Text>}
        {loading && (
          <ActivityIndicator
            color={textStyles[variant]?.color}
            style={{ marginLeft: title ? 8 : 0 }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
