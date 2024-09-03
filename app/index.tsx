import { View, ScrollView, Image, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomBotton from "@/components/CustomBotton";
import { router } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaView className="h-full bg-primary">
      {/* some apps hide the statusBar to people lose the track of time :O */}
      <StatusBar backgroundColor={`#161622`} barStyle={"light-content"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="items-center justify-center w-full min-h-[85vh] px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="w-[300px] h-[300px]"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              resizeMode="contain"
              className="absolute w-[136px] h-[15px] -bottom-2 -right-8"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>

          <CustomBotton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
