import AppButton from "@/components/AppButton";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Logo from "@/components/Logo";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Success = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      {/* Header con logo */}
      <View style={styles.header}>
        <Logo />
      </View>

      {/* Contenido central */}
      <View style={styles.contenido}>
        <Ionicons
          name="checkmark-circle"
          size={100}
          color={Colors.primary}
        />

        <Text style={styles.titulo}>¡Solicitud enviada!</Text>

        <Text style={styles.descripcion}>
          Nuestro equipo está revisando tu perfil y hospedaje. Esto puede
          demorar hasta 48 horas hábiles.
        </Text>

        <Text style={styles.descripcion}>
          Te notificaremos por email cuando esté aprobado.
        </Text>
      </View>

      {/* Botón abajo */}
      <View style={styles.boton}>
        <AppButton onPress={() => router.replace("/login")}>
          Ir a inicio
        </AppButton>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16,
  },
  headerTexto: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  contenido: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.textPrimary,
    textAlign: "center",
  },
  descripcion: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
  boton: {
    padding: 16,
  },
});

export default Success;
