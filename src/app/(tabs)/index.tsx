import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ─── Datos ficticios ────────────────────────────────────────────────
const CUIDADORES = [
  {
    id: "1",
    nombre: "Susana B.",
    ciudad: "Resistencia",
    rating: 4.7,
    verificado: true,
    distancia: "2.4 km",
    iniciales: "SB",
    color: "#DCFCE7",
    acepta: ["dog", "cat"],
  },
  {
    id: "2",
    nombre: "María G.",
    ciudad: "Resistencia",
    rating: 4.9,
    verificado: true,
    distancia: "1.1 km",
    iniciales: "MG",
    color: "#DBEAFE",
    acepta: ["dog"],
  },
  {
    id: "3",
    nombre: "Laura P.",
    ciudad: "Resistencia",
    rating: 4.5,
    verificado: true,
    distancia: "3.2 km",
    iniciales: "LP",
    color: "#F3E8FF",
    acepta: ["cat"],
  },
  {
    id: "4",
    nombre: "Valentina R.",
    ciudad: "Resistencia",
    rating: 5.0,
    verificado: true,
    distancia: "0.8 km",
    iniciales: "VR",
    color: "#FEF3C7",
    acepta: ["dog", "cat"],
  },
  {
    id: "5",
    nombre: "Carolina M.",
    ciudad: "Resistencia",
    rating: 4.3,
    verificado: false,
    distancia: "4.0 km",
    iniciales: "CM",
    color: "#FFE4E6",
    acepta: ["dog"],
  },
];

type Filtro = "todos" | "gatos" | "perros";

// ─── Componente ─────────────────────────────────────────────────────
const HomeScreen = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const cuidadoresFiltrados = CUIDADORES.filter((c) => {
    if (filtro === "gatos") return c.acepta.includes("cat");
    if (filtro === "perros") return c.acepta.includes("dog");
    return true;
  });

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ── */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={styles.logoImg}
            />
            <Text style={styles.logo}>
              <Text style={styles.logoMi}>Mi</Text>Cuidador
            </Text>
          </View>
          <TouchableOpacity style={styles.avatarBtn}>
            <Ionicons
              name="person-outline"
              size={22}
              color={Colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* ── Saludo ── */}
        <Text style={styles.saludo}>Hola, Juan</Text>

        {/* ── Buscador ── */}
        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={18}
            color={Colors.textSecondary}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Ubicación o nombre de hospedaje"
            placeholderTextColor={Colors.textSecondary}
            value={busqueda}
            onChangeText={setBusqueda}
          />
        </View>
        <Text style={styles.ciudadLabel}>Resistencia, Chaco</Text>

        {/* ── Banner CTA ── */}
        <View style={styles.banner}>
          <View style={styles.bannerTexto}>
            <Text style={styles.bannerTitle}>
              Cargá el perfil de tu mascota{"\n"}y reservá en minutos
            </Text>
            <TouchableOpacity style={styles.bannerBtn}>
              <Text style={styles.bannerBtnText}>Agregar</Text>
            </TouchableOpacity>
          </View>
          {/* Ilustración placeholder */}
          <View style={styles.bannerIlustracion}>
            <Ionicons name="paw" size={48} color={Colors.primaryLight} />
          </View>
        </View>

        {/* ── Filtros ── */}
        <View style={styles.filtros}>
          {(["todos", "gatos", "perros"] as Filtro[]).map((f) => (
            <TouchableOpacity
              key={f}
              style={[styles.chip, filtro === f && styles.chipActivo]}
              onPress={() => setFiltro(f)}
            >
              <Text
                style={[styles.chipText, filtro === f && styles.chipTextActivo]}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ── Lista de cuidadores ── */}
        <View style={styles.listaHeader}>
          <View>
            <Text style={styles.listaCity}>Resistencia, Chaco</Text>
            <Text style={styles.listaCount}>
              {cuidadoresFiltrados.length} hospedajes disponibles
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.verMapa}>Ver mapa completo</Text>
          </TouchableOpacity>
        </View>

        {cuidadoresFiltrados.map((cuidador) => (
          <TouchableOpacity
            key={cuidador.id}
            style={styles.card}
            activeOpacity={0.8}
          >
            {/* Foto placeholder con iniciales */}
            <View
              style={[styles.cardFoto, { backgroundColor: cuidador.color }]}
            >
              <Text style={styles.cardIniciales}>{cuidador.iniciales}</Text>
            </View>

            {/* Info */}
            <View style={styles.cardInfo}>
              <Text style={styles.cardNombre}>{cuidador.nombre}</Text>

              <View style={styles.cardRow}>
                <Ionicons name="star" size={13} color={Colors.warning} />
                <Text style={styles.cardRating}>
                  {cuidador.rating.toFixed(1)}
                </Text>

                {cuidador.verificado && (
                  <>
                    <Text style={styles.cardDot}>·</Text>
                    <Ionicons
                      name="checkmark-circle"
                      size={13}
                      color={Colors.success}
                    />
                    <Text style={styles.cardVerificado}>verificado</Text>
                  </>
                )}
              </View>

              <View style={styles.cardRow}>
                <Ionicons
                  name="location-outline"
                  size={13}
                  color={Colors.textSecondary}
                />
                <Text style={styles.cardDistancia}>
                  {cuidador.distancia} {cuidador.ciudad}
                </Text>
              </View>
            </View>

            <Ionicons name="chevron-forward" size={18} color={Colors.border} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

// ─── Estilos ─────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  logoImg: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  logo: {
    fontSize: 22,
    fontWeight: "800",
    color: Colors.textPrimary,
  },
  logoMi: {
    color: Colors.primary,
  },
  avatarBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surfaceVariant,
    justifyContent: "center",
    alignItems: "center",
  },

  // Saludo
  saludo: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 16,
  },

  // Search
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
    marginBottom: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  ciudadLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 20,
  },

  // Banner
  banner: {
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 20,
  },
  bannerTexto: {
    flex: 1,
    gap: 12,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  bannerBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  bannerBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  bannerIlustracion: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },

  // Filtros
  filtros: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  chipActivo: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  chipText: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  chipTextActivo: {
    color: "#fff",
    fontWeight: "700",
  },

  // Lista header
  listaHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 14,
  },
  listaCity: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  listaCount: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  verMapa: {
    fontSize: 12,
    color: Colors.link,
    fontWeight: "600",
  },

  // Card cuidador
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },
  cardFoto: {
    width: 64,
    height: 64,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardIniciales: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.textPrimary,
  },
  cardInfo: {
    flex: 1,
    gap: 4,
  },
  cardNombre: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  cardRating: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  cardDot: {
    color: Colors.textSecondary,
    fontSize: 12,
  },
  cardVerificado: {
    fontSize: 12,
    color: Colors.success,
    fontWeight: "500",
  },
  cardDistancia: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
});
