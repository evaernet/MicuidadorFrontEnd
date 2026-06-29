import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Checkbox } from 'react-native-paper'   // Checkbox de Paper para la declaración
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import AuthHeader from '@/components/AuthHeader'
import InputField from '@/components/InputField'
import StepIndicator from '@/components/StepIndicator'
import { Colors } from '@/constants/Colors'

const RegisterCarerStep3 = () => {
  const router = useRouter()

  const [experiencia, setExperiencia] = useState('')

  // Checkbox de la declaración jurada.
  // 'unchecked' y 'checked' son los dos valores que acepta Checkbox de Paper.
  // Usamos el tipo que Paper espera: 'checked' | 'unchecked'
  const [declaracion, setDeclaracion] = useState<'checked' | 'unchecked'>('unchecked')

  // Alterna entre checked y unchecked cuando el usuario toca el checkbox.
  const toggleDeclaracion = () => {
    setDeclaracion(declaracion === 'checked' ? 'unchecked' : 'checked')
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <AuthHeader titulo="Ser cuidador" subtitulo="" />

        <StepIndicator total={3} current={3} label="Paso 3 de 3 — Identidad" />

        <View style={styles.form}>

          {/* Aviso de privacidad */}
          <Text style={styles.aviso}>
            Esta información es revisada por nuestro equipo antes de publicar tu
            hospedaje. Solo la ve el equipo de MiCuidador.
          </Text>

          {/* ── DNI ── */}
          <Text style={styles.seccion}>DNI</Text>
          <View style={styles.fotoRow}>
            <FotoSlot label="Frente" />
            <FotoSlot label="Dorso" />
          </View>

          {/* ── Selfie ── */}
          <Text style={styles.seccion}>Selfie con DNI</Text>
          <FotoSlot label="Foto tuya sosteniendo el DNI" ancho />

          {/* ── Fotos del domicilio ── */}
          <Text style={styles.seccion}>Fotos del domicilio</Text>
          <View style={styles.fotoRow}>
            <FotoSlot label="Fachada" />
            <FotoSlot label="Interior" />
            <FotoSlot label="Patio" />
          </View>

          {/* ── Experiencia ── */}
          <InputField
            label="Experiencia con animales"
            value={experiencia}
            onChangeText={setExperiencia}
            placeholder="Contá tu experiencia cuidando mascotas"
            multiline
          />

          {/* ── Declaración jurada ── */}
          {/* TouchableOpacity en el row completo para que sea fácil de tocar */}
          <TouchableOpacity style={styles.declaracionRow} onPress={toggleDeclaracion}>
            {/* Checkbox.Android fuerza el estilo material en ambas plataformas */}
            <Checkbox.Android
              status={declaracion}         // 'checked' o 'unchecked'
              onPress={toggleDeclaracion}
              color={Colors.primary}       // color verde cuando está marcado
            />
            <Text style={styles.declaracionText}>
              Declaro que mi hogar es un espacio apto y seguro para el cuidado de mascotas.
            </Text>
          </TouchableOpacity>

          {/* El botón está deshabilitado si el checkbox no está marcado */}
          {/* disabled={declaracion !== 'checked'} → true si NO está chequeado */}
          <Button
            mode="contained"
            buttonColor={Colors.primary}
            style={styles.boton}
            disabled={declaracion !== 'checked'}
            onPress={() => router.replace('/(tabs)')}
          >
            Enviar para revisión
          </Button>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// ─── Componente interno: slot de foto ─────────────────────────────────
// Lo definimos acá abajo porque solo se usa en esta pantalla.
// Recibe label (texto) y ancho (opcional, para que ocupe todo el ancho).
const FotoSlot = ({ label, ancho }: { label: string; ancho?: boolean }) => (
  <TouchableOpacity style={[styles.fotoBox, ancho && styles.fotoBoxAncho]}>
    <Ionicons name="camera-outline" size={22} color={Colors.textSecondary} />
    <Text style={styles.fotoLabel}>{label}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  form: {
    paddingHorizontal: 20,
    gap: 12,
    paddingBottom: 32,
  },
  aviso: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 20,
    backgroundColor: Colors.surfaceVariant,
    padding: 12,
    borderRadius: 8,
  },
  seccion: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: 8,
  },
  fotoRow: {
    flexDirection: 'row',
    gap: 10,
  },
  fotoBox: {
    flex: 1,               // cada slot ocupa el mismo espacio disponible
    height: 72,
    borderRadius: 8,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  fotoBoxAncho: {
    flex: 0,               // anula el flex: 1
    width: '100%',         // ocupa todo el ancho
    height: 80,
  },
  fotoLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
  declaracionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',  // alinea arriba para que el texto largo no rompa el layout
    gap: 8,
    marginTop: 8,
  },
  declaracionText: {
    flex: 1,               // ocupa el espacio restante después del checkbox
    fontSize: 13,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  boton: {
    width: '100%',
    paddingVertical: 4,
    marginTop: 8,
  },
})

export default RegisterCarerStep3
