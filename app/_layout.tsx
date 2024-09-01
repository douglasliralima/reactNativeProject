import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  // I could just used the Slot here, it going to return the index component
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
