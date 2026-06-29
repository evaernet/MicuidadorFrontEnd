import AppButton from "@/components/AppButton";
import AuthHeader from "@/components/AuthHeader";
import InputField from "@/components/InputField";
import StepIndicator from "@/components/StepIndicator";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Divider, IconButton } from "react-native-paper";

const Registercarer = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  return (
    <View style={styles.container}>
      <AuthHeader titulo="Ser cuidador" subtitulo="" />
      <StepIndicator total={3} current={1} label="Paso 1 de 3 — Perfil Personal" />
      <View style={styles.containerphotoprofile}>
        <View style={styles.containeraddphoto}>
          <IconButton icon="plus" size={30} onPress={() => {}} />
        </View>
        <Text> Tu foto de perfil</Text>
      </View>
      <Divider
        style={{ width: "100%", margin: 8, backgroundColor: Colors.border }}
      ></Divider>
      <View style={styles.inputcontainer}>
        <InputField
          label="nombre"
          value={nombre}
          onChangeText={setNombre}
          placeholder="Juan Perez"
        />
        <InputField
          label="email"
          value={email}
          onChangeText={setEmail}
          placeholder="juan@ejemplo.com"
          keyboardType="email-address"
        />
        <InputField
          label="teléfono"
          value={telefono}
          onChangeText={setTelefono}
          placeholder="123-456-7890"
          keyboardType="phone-pad"
        />
      </View>
      <Text style={styles.containerTextPhone}>
        Tu teléfono solo se comparte con el dueño una vez que aceptás una
        reserva.
      </Text>
      <View style={[styles.nextbuttom, { paddingBottom: insets.bottom + 16 }]}>
        <AppButton onPress={() => router.push("/registercarer2")}>Continuar</AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  inputcontainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  containeraddphoto: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: Colors.primary,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  containerphotoprofile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    marginTop: 16,
  },
  containerTextPhone: {
    marginTop: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.textSecondary,
  },
  nextbuttom: {
    padding: 16,
  },
});

export default Registercarer;
