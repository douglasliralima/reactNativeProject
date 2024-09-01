import { Link } from "expo-router";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar />
      <Link href="/profile" style={{ color: "blue" }}>
        Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
