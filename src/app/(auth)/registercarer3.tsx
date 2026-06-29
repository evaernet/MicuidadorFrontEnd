import AppButton from "@/components/AppButton";
import AuthHeader from "@/components/AuthHeader";
import InputField from "@/components/InputField";
import StepIndicator from "@/components/StepIndicator";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Checkbox, Divider, IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";


// Componente interno para cada foto que hay que subir
// Lo definimos acá arriba porque solo se usa en esta pantalla
const FotoSlot = ({ label }: { label: string }) => (
  <View style={styles.fotoSlot}>
    <View style={styles.containeraddphoto}>
      <IconButton icon="plus" size={24} onPress={() => {}} />
    </View>
    <Text style={styles.fotoLabel}>{label}</Text>
  </View>
);

const Registercarer3 = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [experiencia, setExperiencia] = useState("");
  const [declaracion, setDeclaracion] = useState(false); // checkbox

  return (
    <View style={styles.container}>
      <AuthHeader titulo="Ser cuidador" subtitulo="" />
      <StepIndicator total={3} current={3} label="Paso 3 de 3 — Identidad" />

      <ScrollView contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 16 }]}>

        {/* Aviso de privacidad */}
        <Text style={styles.aviso}>
          Esta información es revisada por nuestro equipo antes de publicar tu
          hospedaje. Solo la ve el equipo de MiCuidador.
        </Text>

        <Divider style={styles.divider} />

        {/* DNI */}
        <Text style={styles.seccionTitulo}>DNI</Text>
        <View style={styles.filaDni}>
          <FotoSlot label="Frente" />
          <FotoSlot label="Dorso" />
        </View>

        <Divider style={styles.divider} />

        {/* Selfie con DNI */}
        <Text style={styles.seccionTitulo}>Selfie con DNI</Text>
        <View style={styles.filaFoto}>
          <IconButton icon="account-circle" size={40} iconColor={Colors.textSecondary} onPress={() => {}} />
          <Text style={styles.selfieTexto}>Foto tuya sosteniendoel DNI{"\n"}Para verificar tu identidad</Text>
        </View>

        <Divider style={styles.divider} />

        {/* Fotos del domicilio */}
        <Text style={styles.seccionTitulo}>Fotos del domicilio</Text>
        <View style={styles.filaDni}>
          <FotoSlot label="Fachada" />
          <FotoSlot label="Interior" />
          <FotoSlot label="Patio" />
        </View>

        <Divider style={styles.divider} />

        {/* Experiencia */}
        <InputField
          label="Experiencia con animales"
          value={experiencia}
          onChangeText={setExperiencia}
          placeholder="Ej: Dr. García · 3624-555123"
        />

        {/* Checkbox declaración jurada */}
        <View style={styles.checkboxFila}>
          <Checkbox.Android
            status={declaracion ? "checked" : "unchecked"}
            onPress={() => setDeclaracion(!declaracion)}
            color={Colors.primary}
          />
          <Text style={styles.checkboxTexto}>
            Declaro que mi hogar es un espacio apto y seguro para el cuidado de mascotas.
          </Text>
        </View>

        <View style={styles.boton}>
          {/* El botón solo se activa cuando el checkbox está marcado */}
          <AppButton
            disabled={!declaracion}
            onPress={() => router.replace("/success")}
          >
            Enviar para revisión
          </AppButton>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  scroll: {
    padding: 16,
    gap: 12,
  },
  aviso: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  seccionTitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginTop: 8,
  },
  filaDni: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  fotoSlot: {
    alignItems: "center",
    gap: 4,
  },
  containeraddphoto: {
    width: 72,
    height: 72,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: Colors.primary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  fotoLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  filaFoto: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.surfaceVariant,
    borderRadius: 8,
    padding: 8,
  },
  selfieTexto: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  checkboxFila: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkboxTexto: {
    flex: 1,
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  divider: {
    backgroundColor: Colors.border,
    marginVertical: 4,
  },
  boton: {
    marginTop: 8,
  },
});

export default Registercarer3;
