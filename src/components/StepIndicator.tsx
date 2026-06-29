import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type StepIndicatorProps = {
  total: number;   // cuántos pasos hay (ej: 3)
  current: number; // en qué paso estamos (ej: 1)
  label: string;   // texto abajo (ej: "Paso 1 de 3 — Perfil Personal")
};

const StepIndicator = ({ total, current, label }: StepIndicatorProps) => {
  // Crea un array [1, 2, 3] para mapear los círculos
  const steps = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <View style={styles.fila}>
        {steps.map((step) => (
          <View key={step} style={styles.stepRow}>
            {/* Círculo: verde si es el paso actual, gris si no */}
            <View style={[styles.circulo, step === current && styles.circuloActivo]}>
              <Text style={[styles.numero, step === current && styles.numeroActivo]}>
                {step}
              </Text>
            </View>
            {/* Línea entre círculos, no la ponemos después del último */}
            {step < total && <View style={styles.linea} />}
          </View>
        ))}
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 16,
    gap: 8,
  },
  fila: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  circulo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.surfaceVariant,
    justifyContent: "center",
    alignItems: "center",
  },
  circuloActivo: {
    backgroundColor: Colors.primary,
  },
  numero: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.textSecondary,
  },
  numeroActivo: {
    color: Colors.surface,
  },
  linea: {
    width: 48,
    height: 2,
    backgroundColor: Colors.border,
  },
  label: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
});

export default StepIndicator;
