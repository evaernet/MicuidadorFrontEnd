import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Props opcionales para controlar el tamaño
type LogoProps = {
  size?: "small" | "medium" | "large";
};

const Logo = ({ size = "medium" }: LogoProps) => {
  // Según el tamaño cambian las dimensiones del ícono y el texto
  const iconSize = size === "small" ? 20 : size === "large" ? 36 : 26;
  const fontSize = size === "small" ? 16 : size === "large" ? 28 : 22;

  return (
    <View style={styles.container}>
      {/* paw-outline = patita con borde, sin relleno */}
      <Ionicons
        name="paw-outline"
        size={iconSize}
        color={Colors.textPrimary}
      />
      <Text style={[styles.texto, { fontSize }]}>
        {/* "Mi" en verde primario, "Cuidador" en negro */}
        <Text style={styles.mi}>Mi</Text>Cuidador
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  texto: {
    fontWeight: "800",
    color: Colors.textPrimary,
  },
  mi: {
    color: Colors.primary,
  },
});

export default Logo;
