import { Button } from "@/components/Button";
import { IMAGES } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const styles = {
  container: "flex-1",
  imageContainer: "h-1/2 w-full items-center justify-center mt-10",
  scrollView: "flex-1",
  contentContainer: "flex-1 gap-y-3 mt-4 mx-4",
  welcomeText: "text-center text-4xl font-bold",
  descriptionText: "text-center text-xl leading-8",
  buttonContainer: "mt-10 max-w-sm mx-auto gap-y-4",
  loginText: "text-center text-blue-500",
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 20,
  },
};

const TEXT = {
  welcome: "Welcome to college campus guru",
  description:
    "Your colleges news, updated in your pocket, join the club register for new events and many more",
  loginText: "Already have an account? Login",
};

export default function Index() {
  return (
    <SafeAreaView className={styles.container}>
      <View className={styles.imageContainer}>
        <Image
          source={IMAGES.LOGO}
          resizeMode="contain"
          height={150}
          accessibilityLabel="Campus Logo"
        />
      </View>
      <ScrollView
        className={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View className={styles.contentContainer}>
          <Text className={styles.welcomeText}>{TEXT.welcome}</Text>
          <Text className={styles.descriptionText}>{TEXT.description}</Text>
          <View className={styles.buttonContainer}>
            <Button
              title="Get Started"
              onPress={() => {
                try {
                  // Your logic here
                } catch (error) {
                  console.error("Error occurred: ", error);
                }
              }}
              style={styles.button}
            />

            <Link href="/login" accessibilityLabel="Login link">
              <Text className={styles.loginText}>{TEXT.loginText}</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
