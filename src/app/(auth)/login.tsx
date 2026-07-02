import AuthHeader from "@/components/AuthHeader";
import { Colors } from "@/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //para controlar si se muestra la contraseña
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const insets = useSafeAreaInsets(); // espacio que necesita cada teléfono abajo

  const handleLogin = async () => {
    //async le dice a la funcion que va a ser asincrona, es decir que va a esperar una respuesta del servidor
    //Guardo la funcion en una variable(constante)
    try {
      const respuesta = await fetch("http://192.168.100.5:8000/api/login", {
        //fetch es una funcion de JS que sirve para mandar petiicones y esperar respuestas del servidor, en este caso le paso la url y un objeto con los datos que quiero mandar
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), //Esto es lo que le envio al servidor, en este caso el email y la contraseña que el usuario ingreso
      });

      const data = await respuesta.json(); //await le dice a JavaScript: "pará acá y esperá hasta que llegue la respuesta". Recién cuando llega, guardás el resultado en respuesta.
      console.log("Respuesta del servidor:", data); //v.json() abre el sobre y convierte el texto que mandó el servidor en un objeto JavaScript que podés usar.

      if (!respuesta.ok) {
        //respuesta.ok es true si el código es 200-299, y false si es 400 o más.
        alert(data.message); //alert Es una función de React Native que muestra un cartel emergente en el teléfono con el texto que le pasás. data.message
        return; //return dentro de una función significa "pará acá, no sigas ejecutando más líneas". Si las credenciales son incorrectas, mostrás el error y salís. No guardás nada, no navegás.
      }

      await AsyncStorage.setItem("token", data.token); //AsyncStorage Es un cajón de almacenamiento del teléfono. Guardás cosas con una clave y un valor, y quedan guardadas aunque cierres la app Funciona con pares: clave → valor La clave es "token" (vos elegís el nombre). El valor es data.token, que es el token que devolvió Laravel
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <View style={styles.container}>
      <AuthHeader
        titulo="Bienvenido de vuelta"
        subtitulo="Ingresá para continuar"
      />
      <View style={styles.textcontainer}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          placeholder="jemplo@email.com"
          keyboardType="email-address"
          onChangeText={(texto) => setEmail(texto)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Contraseña"
          value={password}
          placeholder="*******"
          onChangeText={(texto) => setPassword(texto)}
          secureTextEntry={!showPassword}
          right={
            // TextInput.Icon es el ícono adentro del input
            // cuando lo apretás, cambia showPassword de true a false y viceversa
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          style={styles.input}
        />

        <View style={styles.forgetpassword}>
          <TouchableOpacity onPress={() => console.log("olvide contasenia")}>
            <Text style={styles.texttouch}> Olvide contraseña</Text>
          </TouchableOpacity>
        </View>

        <Button
          mode="contained"
          onPress={() => handleLogin()}
          style={styles.buttoningresar}
          labelStyle={{ color: Colors.surface, fontSize: 18 }}
        >
          Ingresar
        </Button>

        <View style={styles.textlogo}>
          <View style={styles.textIngresar}>
            <View style={styles.separador}></View>
            <Text style={{ fontSize: 16 }}>Continuar con</Text>
            <View style={styles.separador}></View>
          </View>

          <TouchableOpacity onPress={() => console.log("Google")}>
            <Image
              source={require("../../assets/images/googlelogo.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>

          <View style={[styles.registrate, { paddingBottom: insets.bottom }]}>
            <Text>¿No tenés cuenta?</Text>
            <TouchableOpacity onPress={() => router.push("/role")}>
              <Text style={styles.texttouch}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textcontainer: {
    flex: 1,
    alignItems: "center",
    gap: 16,
    marginTop: 64,
  },
  input: {
    marginTop: 16,
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    width: 340,
  },
  buttoningresar: {
    padding: 8,
    width: 340,
    backgroundColor: Colors.primary,
  },
  textIngresar: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  textlogo: {
    alignItems: "center",
    gap: 16,
  },
  forgetpassword: {
    alignItems: "flex-end",
    width: 340,
    marginRight: 16,
  },
  registrate: {
    flexDirection: "row",
    gap: 8,
    marginTop: 32,
  },
  texttouch: {
    color: Colors.link,
    fontWeight: "400",
  },
  separador: {
    height: 2,
    width: 100,
    backgroundColor: Colors.border,
  },
});

export default Login;
