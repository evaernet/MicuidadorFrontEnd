import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Chip, RadioButton } from 'react-native-paper'  // componentes de Paper
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import AuthHeader from '@/components/AuthHeader'
import InputField from '@/components/InputField'
import StepIndicator from '@/components/StepIndicator'
import { Colors } from '@/constants/Colors'

// ─── Tipos de vivienda disponibles ───────────────────────────────────
// Definimos las opciones como constante para no repetir strings en el código.
// Cada opción tiene un value (lo que guardamos) y un label (lo que muestra el usuario).
const TIPOS_VIVIENDA = [
  { value: 'casa_patio', label: 'Casa con patio' },
  { value: 'casa',       label: 'Casa' },
  { value: 'quinta',     label: 'Quinta/campo' },
  { value: 'depto',      label: 'Departamento' },
]

// ─── Tamaños de mascotas ──────────────────────────────────────────────
const TAMANOS = ['Miniatura', 'Pequeño', 'Mediano', 'Grande']

const RegisterCarerStep2 = () => {
  const router = useRouter()

  // Estado para el tipo de vivienda. RadioButton.Group solo permite un valor a la vez.
  const [tipoVivienda, setTipoVivienda] = useState('casa_patio')

  // Estado para descripción y mascotas propias
  const [descripcion, setDescripcion] = useState('')
  const [mascotasPropias, setMascotasPropias] = useState('')

  // Estado para qué animales acepta. Son dos booleans independientes.
  const [aceptaPerro, setAceptaPerro] = useState(false)
  const [aceptaGato, setAceptaGato] = useState(false)

  // Estado para tamaños. Es un array porque se pueden elegir varios.
  // Empieza vacío: []
  const [tamanos, setTamanos] = useState<string[]>([])

  // Esta función agrega o quita un tamaño del array cuando el usuario toca el chip.
  const toggleTamano = (tamano: string) => {
    // includes() verifica si el valor ya está en el array.
    if (tamanos.includes(tamano)) {
      // Si ya está, lo filtramos (lo sacamos): devuelve todos los que NO son ese tamaño.
      setTamanos(tamanos.filter((t) => t !== tamano))
    } else {
      // Si no está, lo agregamos con spread: [...tamanos, tamano] = todos los anteriores + el nuevo.
      setTamanos([...tamanos, tamano])
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <AuthHeader titulo="Ser cuidador" subtitulo="" />

        <StepIndicator total={3} current={2} label="Paso 2 de 3 — Tu hospedaje" />

        <View style={styles.form}>

          {/* ── Tipo de vivienda ── */}
          <Text style={styles.seccion}>Tipo de vivienda</Text>

          {/* RadioButton.Group de Paper: solo permite seleccionar una opción a la vez. */}
          {/* value = el valor actualmente seleccionado. */}
          {/* onValueChange = función que se llama cuando el usuario elige otro. */}
          <RadioButton.Group value={tipoVivienda} onValueChange={setTipoVivienda}>
            <View style={styles.radioGrid}>
              {TIPOS_VIVIENDA.map((tipo) => (
                // RadioButton.Item muestra el radio + el label juntos.
                // position="leading" pone el círculo a la izquierda del texto.
                <RadioButton.Item
                  key={tipo.value}
                  value={tipo.value}
                  label={tipo.label}
                  position="leading"
                  style={styles.radioItem}
                  labelStyle={styles.radioLabel}
                  color={Colors.primary}   // color del radio cuando está seleccionado
                />
              ))}
            </View>
          </RadioButton.Group>

          {/* ── Fotos del hospedaje ── */}
          <Text style={styles.seccion}>Fotos del hospedaje (mínimo 3)</Text>
          <TouchableOpacity style={styles.fotoBox}>
            <Ionicons name="add" size={28} color={Colors.textSecondary} />
          </TouchableOpacity>

          {/* ── Descripción ── */}
          <InputField
            label="Descripción del hogar"
            value={descripcion}
            onChangeText={setDescripcion}
            placeholder="Contá cómo es tu espacio para las mascotas"
            multiline
          />

          {/* ── Mascotas propias ── */}
          <InputField
            label="¿Tenés mascotas propias?"
            value={mascotasPropias}
            onChangeText={setMascotasPropias}
            placeholder="Ej: un gato castrado de 3 años"
          />

          {/* ── Aceptás ── */}
          <Text style={styles.seccion}>Aceptás</Text>

          {/* Chip de Paper: botón tipo etiqueta que se puede seleccionar y deseleccionar. */}
          {/* selected = si está activo o no. */}
          {/* onPress = función que se llama al tocarlo. Invierte el valor con ! */}
          <View style={styles.chips}>
            <Chip
              selected={aceptaPerro}
              onPress={() => setAceptaPerro(!aceptaPerro)}
              selectedColor={Colors.primary}
              style={[styles.chip, aceptaPerro && styles.chipSeleccionado]}
            >
              Perro
            </Chip>

            <Chip
              selected={aceptaGato}
              onPress={() => setAceptaGato(!aceptaGato)}
              selectedColor={Colors.primary}
              style={[styles.chip, aceptaGato && styles.chipSeleccionado]}
            >
              Gato
            </Chip>
          </View>

          {/* ── Tamaños ── */}
          <Text style={styles.seccion}>Tamaños que aceptás</Text>
          <View style={styles.chips}>
            {TAMANOS.map((t) => (
              <Chip
                key={t}
                selected={tamanos.includes(t)}   // includes() devuelve true si el tamaño está en el array
                onPress={() => toggleTamano(t)}
                selectedColor={Colors.primary}
                style={[styles.chip, tamanos.includes(t) && styles.chipSeleccionado]}
              >
                {t}
              </Chip>
            ))}
          </View>

          <Button
            mode="contained"
            buttonColor={Colors.primary}
            style={styles.boton}
            onPress={() => router.push('/registercarer3')}
          >
            Continuar
          </Button>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

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
  seccion: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: 8,
  },
  radioGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',    // cuando no entran en una fila, saltan a la siguiente
  },
  radioItem: {
    width: '50%',        // 2 opciones por fila
    paddingVertical: 4,
  },
  radioLabel: {
    fontSize: 13,
    color: Colors.textPrimary,
  },
  fotoBox: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.surface,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipSeleccionado: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
  },
  boton: {
    width: '100%',
    paddingVertical: 4,
    marginTop: 8,
  },
})

export default RegisterCarerStep2
