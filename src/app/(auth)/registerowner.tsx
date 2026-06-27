import AuthHeader from "@/components/AuthHeader";
import InputField from "@/components/InputField";
import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const Registerowner = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [repeat, setRepeat] = React.useState("");

  return (
    <View>
      <AuthHeader titulo="Crear cuenta" subtitulo="Completá tus datos" />
      <InputField
        label="Nombre"
        value={nombre}
        onChangeText={setNombre}
        placeholder="Juan Perez"
      />

      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        mode="outlined"
        label="Contraseña"
        value={password}
        onChangeText={(password) => setpassword(password)}
      />

      <TextInput
        mode="outlined"
        label="Repetir Contraseña"
        value={repeat}
        placeholder="Repetir contraseña"
        onChangeText={(repeat) => setRepeat(repeat)}
      />

      <View style={styles.containerboton}>
        <Button
          mode="contained"
          buttonColor={Colors.primary}
          style={styles.boton}
          onPress={() => console.log("Pressed")}
        >
          Registrarme
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  boton: {
    width: "90%",
  },
  containerboton: {
    alignItems: "center",
  },
});
export default Registerowner;
