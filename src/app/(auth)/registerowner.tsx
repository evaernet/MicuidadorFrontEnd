import AppButton from "@/components/AppButton";
import AuthHeader from "@/components/AuthHeader";
import InputField from "@/components/InputField";
import axios from "axios"; // Importamos axios, la librería que instalamos para hacer pedidos al servidor
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Registerowner = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [repeat, setRepeat] = React.useState("");
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleRegister = async () => {
    //// async significa que va a hacer cosas que tardan tiempo (hablar con el servidor)
    try {
      // Le mandamos los datos al servidor
      // axios.post recibe dos cosas: la URL y los datos a mandar
      const respuesta = await axios.post(
        "http://192.168.0.9:8000/api/register",
        {
          // await significa: esperá hasta que el servidor responda antes de seguir

          name: nombre,
          email: email,
          password: password,
          password_confirmation: repeat,
        },
      );

      // Si llegó hasta acá, el registro funcionó
      // respuesta.data es el objeto que devolvió Laravel: { message, user }
      // Lo mostramos en consola para verificar durante el desarrollo
      console.log(respuesta.data);

      // Navegamos a la pantalla de verificación OTP
      router.replace("/(tabs)");

      // axios mete toda la información del error en error.response
    } catch (error: any) {
      // error.response.data.message es el mensaje que devolvió Laravel
      // el || significa: si no existe ese mensaje, mostrá "Error al registrarse"
      // el signo ? significa: si error.response no existe, no tires error, devolvé undefined
      alert(error.response?.data?.message || "Error al registrarse");
    }
  };

  return (
    <View style={styles.container}>
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
      <View
        style={[styles.containerboton, { paddingBottom: insets.bottom + 16 }]}
      >
        <AppButton onPress={handleRegister}>Registrarme</AppButton>
      </View>
    </View>
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
