import { Stack } from "expo-router";
import React from "react";
import { PaperProvider } from "react-native-paper";

const RootNatigation = () => {
  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }} />{" "}
      {/*Antes tenías <Stack.Screen name="index" /> adentro, que le decía "solo existe la pantalla index". Sin hijos, Expo Router descubre todas las pantallas solo.    */}
    </PaperProvider>
  );
};

export default RootNatigation;
