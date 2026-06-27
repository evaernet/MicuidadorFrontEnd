import AuthHeader from "@/components/AuthHeader";
import InputField from "@/components/InputField";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView as SafeAreaViewRN } from "react-native-safe-area-context"; // ← este, no el de react-native

const Registercarer = () => {
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [repeat, setRepeat] = React.useState("");

  return (
    <SafeAreaViewRN style={styles.container}>
      <View>
        <AuthHeader titulo="Crear cuenta" subtitulo="Completá tus datos" />
      </View>
      <View>
        <InputField
          label="Nombre"
          value={nombre}
          onChangeText={setNombre}
          placeholder="Juan Perez"
        />
        <InputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="juan@ejemplo.com"
        />
        <InputField
          label="Contraseña"
          value={password}
          onChangeText={setpassword}
          placeholder="Ingresá tu contraseña"
        />
        <InputField
          label="Repetir Contraseña"
          value={repeat}
          onChangeText={setRepeat}
          placeholder="Repetí tu contraseña"
        />
      </View>
    </SafeAreaViewRN>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Registercarer;
