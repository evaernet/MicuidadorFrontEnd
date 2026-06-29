import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// ─── Props ───────────────────────────────────────────────────────────
type StepIndicatorProps = {
  total: number; // cuántos pasos hay en total (ej: 3)
  current: number; // en qué paso estamos ahora (ej: 1)
  label: string; // texto descriptivo abajo (ej: "Paso 1 de 3 — Perfil Personal")
};

// ─── Componente ──────────────────────────────────────────────────────
const StepIndicator = ({ total, current, label }: StepIndicatorProps) => {
  // Array.from({ length: total }) crea un array con `total` elementos vacíos.
  // Lo usamos para poder hacer .map() y dibujar un círculo por cada paso.
  // (_, i) → el _ es el valor (no lo usamos), i es el índice: 0, 1, 2...
  const steps = Array.from({ length: total }, (_, i) => i + 1);
  // steps queda como [1, 2, 3]

  return (
    <View style={styles.container}>
      {/* Fila de círculos numerados */}
      <View style={styles.circles}>
        {steps.map((step) => (
          <View key={step} style={styles.stepRow}>
            {/* El círculo. Si step === current, recibe el estilo activo (verde). */}
            {/* Los corchetes en style={[]} permiten pasar varios estilos a la vez. */}
            {/* El segundo estilo solo se aplica si la condición es true. */}
            <View
              style={[styles.circle, step === current && styles.circleActive]}
            >
              <Text
                style={[
                  styles.circleText,
                  step === current && styles.circleTextActive,
                ]}
              >
                {step}
              </Text>
            </View>

            {/* Línea conectora entre círculos. No la dibujamos después del último. */}
            {step < total && <View style={styles.line} />}
          </View>
        ))}
      </View>

      {/* Texto descriptivo del paso actual */}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 8,
    alignItems: "center",
  },
  circles: {
    flexDirection: "row", // pone los círculos en fila horizontal
    justifyContent: "center", // centra los círculos horizontalmente
    gap: 32, // espacio entre círculos y líneas
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16, // la mitad del width/height = círculo perfecto
    backgroundColor: Colors.surfaceVariant,
    justifyContent: "center",
    alignItems: "center",
  },
  circleActive: {
    backgroundColor: Colors.primary, // verde cuando es el paso actual
  },
  circleText: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.textSecondary,
  },
  circleTextActive: {
    color: "#fff", // texto blanco sobre el círculo verde
  },
  line: {
    width: 64, // largo de la línea entre círculos
    height: 2,
    backgroundColor: Colors.border,
  },
  label: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
});

export default StepIndicator;
