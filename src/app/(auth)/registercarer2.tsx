import AppButton from "@/components/AppButton";
import AuthHeader from "@/components/AuthHeader";
import InputField from "@/components/InputField";
import StepIndicator from "@/components/StepIndicator";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Chip, Divider, IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const Registercarer2 = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Tipo de vivienda seleccionada
  const [vivienda, setVivienda] = useState("casa");

  // Descripción del hogar
  const [descripcion, setDescripcion] = useState("");
  const [mascotas, setMascotas] = useState("");

  // Animales que acepta (puede ser más de uno, por eso usamos booleanos separados)
  const [perro, setPerro] = useState(false);
  const [gato, setGato] = useState(false);

  // Tamaños que acepta (array, puede tener varios)
  const [tamaños, setTamaños] = useState<string[]>([]);

  // Agrega o quita un tamaño del array
  const toggleTamaño = (tamaño: string) => {
    if (tamaños.includes(tamaño)) {
      setTamaños(tamaños.filter((t) => t !== tamaño)); // lo quita
    } else {
      setTamaños([...tamaños, tamaño]); // lo agrega
    }
  };

  return (
    <View style={styles.container}>
      <AuthHeader titulo="Ser cuidador" subtitulo="" />
      <StepIndicator total={3} current={2} label="Paso 2 de 3 — Tu hospedaje" />

      <ScrollView contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 16 }]}>
        {/* Tipo de vivienda — tarjetas con ícono */}
        <Text style={styles.seccionTitulo}>Tipo de vivienda</Text>
        <View style={styles.gridVivienda}>
          {[
            { value: "casa_patio", label: "Casa con patio", icon: "home-outline" },
            { value: "casa",       label: "Casa",           icon: "home" },
            { value: "quinta",     label: "Quinta/campo",   icon: "leaf-outline" },
            { value: "depto",      label: "Departamento",   icon: "business-outline" },
          ].map((op) => (
            <TouchableOpacity
              key={op.value}
              style={[styles.opcionVivienda, vivienda === op.value && styles.opcionActiva]}
              onPress={() => setVivienda(op.value)}
            >
              <Ionicons
                name={op.icon as any}
                size={28}
                color={vivienda === op.value ? Colors.primary : Colors.textSecondary}
              />
              <Text style={[styles.opcionLabel, vivienda === op.value && styles.opcionLabelActiva]}>
                {op.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Divider style={styles.divider} />

        {/* Foto del hogar */}
        <Text style={styles.seccionTitulo}>Fotos del hospedaje (mínimo 3)</Text>
        <View style={styles.containeraddphoto}>
          <IconButton icon="plus" size={30} onPress={() => {}} />
        </View>

        <Divider style={styles.divider} />

        <View style={styles.inputs}>
          <InputField
            label="Descripción del hogar"
            value={descripcion}
            onChangeText={setDescripcion}
            placeholder="Ej: Vivo en una casa con patio, cerca de un parque. Me encantan los animales y tengo experiencia cuidando perros y gatos."
          />
          <InputField
            label="¿Tenés mascotas propias?"
            value={mascotas}
            onChangeText={setMascotas}
            placeholder="Ej: Sí, tengo 2 gatos"
          />
        </View>

        <Divider style={styles.divider} />

        {/* Chips de animales que acepta */}
        <Text style={styles.seccionTitulo}>Aceptás</Text>
        <View style={styles.chips}>
          <Chip
            selected={perro}
            onPress={() => setPerro(!perro)}
            style={perro ? styles.chipActivo : styles.chip}
            textStyle={{ color: perro ? Colors.surface : Colors.textPrimary }}
          >
            Perro
          </Chip>
          <Chip
            selected={gato}
            onPress={() => setGato(!gato)}
            style={gato ? styles.chipActivo : styles.chip}
            textStyle={{ color: gato ? Colors.surface : Colors.textPrimary }}
          >
            Gato
          </Chip>
        </View>

        {/* Chips de tamaños */}
        <Text style={styles.seccionTitulo}>Tamaños que aceptás</Text>
        <View style={styles.chips}>
          {["Miniatura", "Pequeño", "Mediano", "Grande"].map((t) => (
            <Chip
              key={t}
              selected={tamaños.includes(t)}
              onPress={() => toggleTamaño(t)}
              style={tamaños.includes(t) ? styles.chipActivo : styles.chip}
              textStyle={{
                color: tamaños.includes(t)
                  ? Colors.surface
                  : Colors.textPrimary,
              }}
            >
              {t}
            </Chip>
          ))}
        </View>

        <View style={styles.boton}>
          <AppButton onPress={() => router.push("/registercarer3")}>
            Continuar
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
  seccionTitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginTop: 8,
  },
  gridVivienda: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  opcionVivienda: {
    width: "47%",           // 2 columnas con gap
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    gap: 6,
    backgroundColor: Colors.surface,
  },
  opcionActiva: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  opcionLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  opcionLabelActiva: {
    color: Colors.primary,
    fontWeight: "600",
  },
  containeraddphoto: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: Colors.primary,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    gap: 12,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipActivo: {
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  divider: {
    backgroundColor: Colors.border,
    marginVertical: 4,
  },
  boton: {
    marginTop: 16,
  },
});

export default Registercarer2;
