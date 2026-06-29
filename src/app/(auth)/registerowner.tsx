import AppButton from "@/components/AppButton";
import AuthHeader from "@/components/AuthHeader";
import InputField from "@/components/InputField";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Registerowner = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [repeat, setRepeat] = React.useState("");
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader titulo="Crear cuenta" subtitulo="Completá tus datos" />

      <View style={styles.inputcontainer}>
        <InputField
          label="nombre"
          value={nombre}
          onChangeText={setNombre}
          placeholder="Juan Perez"
        ></InputField>

        <InputField
          label="email"
          value={email}
          onChangeText={setEmail}
          placeholder="juan@ejemplo.com"
          keyboardType="email-address"
        ></InputField>

        <InputField
          label="contraseña"
          value={password}
          onChangeText={setpassword}
          placeholder="Ingrese su contraseña"
          secureTextEntry={true}
        ></InputField>

        <InputField
          label="repetir contraseña"
          value={repeat}
          onChangeText={setRepeat}
          placeholder="Repetir contraseña"
          secureTextEntry={true}
        ></InputField>
      </View>
      <View style={styles.textCondiciones}>
        <Text>
          {" "}
          Al registrarte aceptás los 
          <Text style={{ color: "blue" }}>Términos y condiciones</Text>
        </Text>
      </View>
      <View style={styles.containerboton}>
        <AppButton onPress={() => router.replace("/verify")}>
          Registrarme
        </AppButton>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerboton: {
    padding: 16,
  },
  inputcontainer: {
    padding: 16,
    gap: 16,
  },
  container: {
    flex: 1,
  },
  textCondiciones: {
    padding: 16,
    alignItems: "center",
  },
});
export default Registerowner;
