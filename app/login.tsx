import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1 items-center justify-center">
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
}
