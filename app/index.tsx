import { Link } from "expo-router";
import { View, Text, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Hello world</Text>
      <StatusBar />
      <Link href="/profile" style={{ color: "blue" }}>
        Profile
      </Link>
    </View>
  );
}
