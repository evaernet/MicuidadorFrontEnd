import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

// Estas son las props que acepta el componente.
// El signo ? significa que son opcionales.
type InputFieldProps = {
  label: string; // texto que flota arriba cuando escribís
  value: string; // el valor actual del input
  onChangeText: (text: string) => void; // función que se llama cada vez que escribís
  placeholder?: string; // texto gris de fondo cuando está vacío
  secureTextEntry?: boolean; // true = muestra puntos (para contraseñas)
  keyboardType?: "default" | "email-address" | "phone-pad" | "numeric"; // tipo de teclado
  error?: boolean; // true = borde rojo
  right?: React.ReactNode; // ícono a la derecha (ej: ojo de contraseña)
};

const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType = "default",
  error = false,
  right,
}: InputFieldProps) => {
  return (
    <TextInput
      mode="outlined" // estilo con borde alrededor
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      error={error}
      right={right}
      style={styles.input}
      theme={{
        colors: {
          background: Colors.surface, // color de fondo del input
        },
        roundness: 8, // ← acá va el border radius en Paper
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%", // ocupa todo el ancho del contenedor padre
  },
});

export default InputField;
