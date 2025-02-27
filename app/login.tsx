import { IMAGES } from "@/constants/images";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const styles = {
  container: "flex-1 items-center bg-gray-100 p-2 m-10",
  image: "h-1/2 mb-4 aspect-square",
  input: "w-full p-4 mb-4 bg-white rounded-lg border border-gray-300",
  passwordInput: "w-full p-4 mb-6 bg-white rounded-lg border border-gray-300",
  button: "w-full p-4 bg-blue-500 rounded-lg items-center",
  buttonText: "text-white font-semibold",
  link: "mt-4",
  linkText: "text-blue-600",
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      if (!email || !password) {
        console.error("Email and password are required");
        return;
      }
      // Implement your login logic here
      console.log("Email:", email, "Password:", password);
    } catch (error) {
      console.error("Login failed: ", error);
      // Display an error message to the user
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <View className={styles.container}>
        <Image
          source={IMAGES.LOGO} // Replace with your logo path
          className={styles.image}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel="App Logo"
          accessibilityRole="image"
        />

        <TextInput
          className={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          accessible={true}
          accessibilityLabel="Email Address"
          accessibilityRole="text"
          textContentType="emailAddress"
          autoComplete="email"
        />

        <TextInput
          className={styles.passwordInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          accessible={true}
          accessibilityLabel="Password"
          accessibilityRole="text"
          textContentType="password"
          autoComplete="password"
        />

        <TouchableOpacity
          className={styles.button}
          onPress={handleLogin}
          accessible={true}
          accessibilityLabel="Login Button"
          accessibilityRole="button"
        >
          <Text className={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Link
          href="/signup"
          className={styles.link}
          accessibilityLabel="Sign Up Link"
          accessibilityRole="link"
        >
          <Text className={styles.linkText}>
            Don't have an account? Sign Up
          </Text>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}
