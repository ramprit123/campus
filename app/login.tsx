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

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <View className="flex-1 items-center bg-gray-100 p-2 m-10">
        <Image
          source={IMAGES.LOGO} // Replace with your logo path
          className="h-1/2 mb-4 aspect-square"
          resizeMode="contain"
          accessible={true}
          accessibilityLabel="App Logo"
          accessibilityRole="image"
        />

        <TextInput
          className="w-full p-4 mb-4 bg-white rounded-lg border border-gray-300"
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
          className="w-full p-4 mb-6 bg-white rounded-lg border border-gray-300"
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
          className="w-full p-4 bg-blue-500 rounded-lg items-center"
          onPress={handleLogin}
          accessible={true}
          accessibilityLabel="Login Button"
          accessibilityRole="button"
        >
          <Text className="text-white font-semibold">Login</Text>
        </TouchableOpacity>

        <Link
          href="/signup"
          className="mt-4"
          accessibilityLabel="Sign Up Link"
          accessibilityRole="link"
        >
          <Text className="text-blue-600">Don't have an account? Sign Up</Text>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}
