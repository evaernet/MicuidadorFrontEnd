import AppButton from "@/components/AppButton";
import AuthHeader from "@/components/AuthHeader";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Verify = () => {
  const router = useRouter();

  // Un estado por cada casilla del código
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [d3, setD3] = useState("");
  const [d4, setD4] = useState("");

  // useRef nos da una referencia directa al input para poder hacer .focus()
  // (mover el cursor al siguiente campo automáticamente)
  const ref2 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);
  const ref4 = useRef<TextInput>(null);

  // Esta función maneja el cambio en cada casilla.
  // Guarda el valor y si hay un siguiente campo, lo enfoca automáticamente.
  const handleChange = (
    text: string,
    setter: (v: string) => void,
    nextRef?: React.RefObject<TextInput>,
  ) => {
    setter(text);
    if (text && nextRef) {
      nextRef.current?.focus(); // el ?. evita error si el ref es null
    }
  };

  return (
    <View style={styles.container}>
      <AuthHeader
        titulo="Codigo de Verificación"
        subtitulo="Ingresa el codigo que enviamos a tu correo"
      />

      {/* Fila de 4 casillas */}
      <View style={styles.campos}>
        <TextInput
          style={styles.casilla}
          maxLength={1} // solo acepta 1 dígito
          keyboardType="numeric"
          autoFocus // enfoca este input automáticamente al abrir la pantalla
          value={d1}
          onChangeText={(text) => handleChange(text, setD1, ref2)}
        />
        <TextInput
          ref={ref2}
          style={styles.casilla}
          maxLength={1}
          keyboardType="numeric"
          value={d2}
          onChangeText={(text) => handleChange(text, setD2, ref3)}
        />
        <TextInput
          ref={ref3}
          style={styles.casilla}
          maxLength={1}
          keyboardType="numeric"
          value={d3}
          onChangeText={(text) => handleChange(text, setD3, ref4)}
        />
        <TextInput
          ref={ref4}
          style={styles.casilla}
          maxLength={1}
          keyboardType="numeric"
          value={d4}
          onChangeText={(text) => handleChange(text, setD4)}
        />
      </View>

      <View style={styles.boton}>
        <AppButton onPress={() => router.replace("/(tabs)")}>
          Registrar
        </AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
    gap: 16,
  },
  campos: {
    flexDirection: "row", // pone las 4 casillas en fila
    justifyContent: "center",
    gap: 12,
    marginTop: 40,
  },
  casilla: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    textAlign: "center", // centra el número adentro
    fontSize: 24,
    backgroundColor: Colors.surface,
  },
  boton: {
    paddingHorizontal: 16,
    marginTop: 80,
  },
});

export default Verify;
