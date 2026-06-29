import Logo from "@/components/Logo";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ─── Datos ficticios de hospedajes ──────────────────────────────────
const HOSPEDAJES = [
  {
    id: "1",
    nombre: "Casa Jardín",
    cuidador: "Susana B.",
    ciudad: "Resistencia",
    rating: 4.7,
    verificado: true,
    distancia: "2.4 km",
    iniciales: "CJ",
    color: "#DCFCE7",
    acepta: ["dog", "cat"],
    tipo: "Casa con patio",
  },
  {
    id: "2",
    nombre: "Hogar del Sol",
    cuidador: "María G.",
    ciudad: "Resistencia",
    rating: 4.9,
    verificado: true,
    distancia: "1.1 km",
    iniciales: "HS",
    color: "#DBEAFE",
    acepta: ["dog"],
    tipo: "Casa",
  },
  {
    id: "3",
    nombre: "Refugio Felino",
    cuidador: "Laura P.",
    ciudad: "Resistencia",
    rating: 4.5,
    verificado: true,
    distancia: "3.2 km",
    iniciales: "RF",
    color: "#F3E8FF",
    acepta: ["cat"],
    tipo: "Departamento",
  },
  {
    id: "4",
    nombre: "La Quinta Verde",
    cuidador: "Valentina R.",
    ciudad: "Resistencia",
    rating: 5.0,
    verificado: true,
    distancia: "0.8 km",
    iniciales: "QV",
    color: "#FEF3C7",
    acepta: ["dog", "cat"],
    tipo: "Quinta/campo",
  },
  {
    id: "5",
    nombre: "Casa Serena",
    cuidador: "Carolina M.",
    ciudad: "Resistencia",
    rating: 4.3,
    verificado: false,
    distancia: "4.0 km",
    iniciales: "CS",
    color: "#FFE4E6",
    acepta: ["dog"],
    tipo: "Casa",
  },
];

type Filtro = "todos" | "gatos" | "perros";

// ─── Componente ─────────────────────────────────────────────────────
const HomeScreen = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const hospedajesFiltrados = HOSPEDAJES.filter((h) => {
    if (filtro === "gatos") return h.acepta.includes("cat");
    if (filtro === "perros") return h.acepta.includes("dog");
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
          <Logo />
          <TouchableOpacity style={styles.avatarBtn}>
            <Ionicons name="person-outline" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* ── Saludo ── */}
        <Text style={styles.saludo}>Hola, Juan 👋</Text>

        {/* ── Buscador ── */}
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color={Colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Ubicación o nombre de hospedaje"
            placeholderTextColor={Colors.textSecondary}
            value={busqueda}
            onChangeText={setBusqueda}
          />
        </View>

        {/* ── Ubicación ── */}
        <View style={styles.ubicacionRow}>
          <Ionicons name="location-outline" size={13} color={Colors.textSecondary} />
          <Text style={styles.ciudadLabel}>Resistencia, Chaco</Text>
        </View>

        {/* ── Banner CTA — solo aparece si no tiene mascotas cargadas ── */}
        <View style={styles.banner}>
          <View style={styles.bannerIcono}>
            <Ionicons name="paw" size={36} color={Colors.primary} />
          </View>
          <View style={styles.bannerTexto}>
            <Text style={styles.bannerTitle}>
              Cargá el perfil de tu mascota y reservá en minutos
            </Text>
            <TouchableOpacity style={styles.bannerBtn}>
              <Text style={styles.bannerBtnText}>Agregar mascota</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Filtros ── */}
        <View style={styles.filtros}>
          {[
            { key: "todos",  label: "Todos",  icon: "apps-outline" },
            { key: "perros", label: "Perros", icon: "paw-outline" },
            { key: "gatos",  label: "Gatos",  icon: "paw-outline" },
          ].map((f) => (
            <TouchableOpacity
              key={f.key}
              style={[styles.chip, filtro === f.key && styles.chipActivo]}
              onPress={() => setFiltro(f.key as Filtro)}
            >
              <Ionicons
                name={f.icon as any}
                size={13}
                color={filtro === f.key ? "#fff" : Colors.textSecondary}
              />
              <Text style={[styles.chipText, filtro === f.key && styles.chipTextActivo]}>
                {f.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ── Header lista ── */}
        <View style={styles.listaHeader}>
          <View>
            <Text style={styles.listaCity}>Resistencia, Chaco</Text>
            <Text style={styles.listaCount}>
              {hospedajesFiltrados.length} hospedajes disponibles
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.verMapa}>Ver mapa completo</Text>
          </TouchableOpacity>
        </View>

        {/* ── Cards hospedajes ── */}
        {hospedajesFiltrados.map((h) => (
          <TouchableOpacity key={h.id} style={styles.card} activeOpacity={0.8}>

            {/* Foto placeholder del hospedaje */}
            <View style={[styles.cardFoto, { backgroundColor: h.color }]}>
              <Text style={styles.cardIniciales}>{h.iniciales}</Text>
            </View>

            {/* Info */}
            <View style={styles.cardInfo}>
              {/* Nombre del hospedaje + rating */}
              <View style={styles.cardRow}>
                <Text style={styles.cardNombre}>{h.nombre}</Text>
                <View style={styles.cardRatingRow}>
                  <Ionicons name="star" size={12} color={Colors.warning} />
                  <Text style={styles.cardRating}>{h.rating.toFixed(1)}</Text>
                </View>
              </View>

              {/* Cuidador + verificado */}
              <View style={styles.cardRow}>
                <Ionicons name="person-outline" size={12} color={Colors.textSecondary} />
                <Text style={styles.cardCuidador}>{h.cuidador}</Text>
                {h.verificado && (
                  <>
                    <Ionicons name="checkmark-circle" size={13} color={Colors.success} />
                    <Text style={styles.cardVerificado}>verificado</Text>
                  </>
                )}
              </View>

              {/* Distancia + tipo */}
              <View style={styles.cardRow}>
                <Ionicons name="location-outline" size={12} color={Colors.textSecondary} />
                <Text style={styles.cardDistancia}>{h.distancia} · {h.ciudad}</Text>
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
    paddingBottom: 32,
    gap: 16,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  ubicacionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: -8,
  },
  ciudadLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
  },

  // Banner
  banner: {
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 16,
  },
  bannerIcono: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerTexto: {
    flex: 1,
    gap: 10,
  },
  bannerTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.textPrimary,
    lineHeight: 19,
  },
  bannerBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  bannerBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  // Filtros
  filtros: {
    flexDirection: "row",
    gap: 8,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 14,
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

  // Card hospedaje
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 12,
    gap: 12,
  },
  cardFoto: {
    width: 72,
    height: 72,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardIniciales: {
    fontSize: 16,
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
    flex: 1,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  cardRatingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  cardRating: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  cardCuidador: {
    fontSize: 12,
    color: Colors.textSecondary,
    flex: 1,
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
