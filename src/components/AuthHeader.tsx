import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//nombre y tipo de datos de mis props
type AuthHeaderProps = {
  titulo: string;
  subtitulo: string;
};

const AuthHeader = ({ titulo, subtitulo }: AuthHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerheader}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.TextHeader}>MiCuidador</Text>
      </View>
      <Text style={styles.headertitulo}>{titulo}</Text>
      <Text style={styles.headersubtitulo}>{subtitulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: 48,
    paddingBottom: 16,
  },

  containerheader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 16,
  },
  logo: {
    width: 50,
    height: 40,
  },
  TextHeader: {
    fontSize: 32,
    fontWeight: "700",
  },
  headertitulo: {
    paddingLeft: 16,
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.surface,
  },
  headersubtitulo: {
    paddingLeft: 16,
    fontSize: 16,
    color: Colors.surface,
  },
});

export default AuthHeader;
