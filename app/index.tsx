import { Button } from "@/components/Button";
import { IMAGES } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <View className="h-1/2 w-full items-center justify-center mt-10">
        <Image source={IMAGES.LOGO} resizeMode="contain" height={100} />
      </View>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-y-3 mt-4 mx-4">
          <Text className="text-center text-4xl font-bold">
            Welcome to college campus guru
          </Text>
          <Text className="text-center text-xl leading-8">
            Your colleges news, updated in your pocket, join the club register
            for new events and many more
          </Text>
          <View className="mt-10 max-w-sm mx-auto">
            <Button title="Get Started" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
