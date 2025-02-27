import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  SafeAreaViewProps,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

interface SafeViewProps extends SafeAreaViewProps {
  // You can add custom props here if needed
  style?: any;
  className?: string;
  insets?: any;
  children?: React.ReactNode;
  rest?: any;
}

export const SafeView: React.FC<SafeViewProps> = ({
  children,
  style,
  className,
  ...rest
}) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
      {...rest}
      className={className}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure it takes up the screen
  },
});

// Example Usage:
// <SafeView style={{ backgroundColor: 'white' }}>
//   {/* Your content here */}
//   <Text>This is inside the safe area.</Text>
// </SafeView>

// Example with custom styling:
// <SafeView
//   style={{ backgroundColor: 'lightblue', padding: 20 }}
// >
//   {/* Your content here */}
// </SafeView>
