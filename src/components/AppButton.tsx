import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { Colors } from '@/constants/Colors'

// Props que recibe el componente desde afuera
type AppButtonProps = {
  onPress: () => void            // función que se ejecuta al tocar el botón
  children: React.ReactNode      // el texto adentro, ej: "Continuar"
  disabled?: boolean             // opcional — true = botón gris, no se puede tocar
  variant?: 'filled' | 'outline' // opcional — filled: fondo verde | outline: solo borde
}

const AppButton = ({
  onPress,
  children,
  disabled = false,    // por defecto el botón está activo
  variant = 'filled',  // por defecto el botón es verde con relleno
}: AppButtonProps) => {
  return (
    <Button
      mode={variant === 'filled' ? 'contained' : 'outlined'} // contained = relleno, outlined = solo borde
      onPress={onPress}
      disabled={disabled}
      buttonColor={variant === 'filled' ? Colors.primary : undefined} // fondo verde solo si es filled
      textColor={variant === 'filled' ? '#fff' : Colors.primary}      // texto blanco o verde según variante
      style={styles.button}
      contentStyle={styles.content}
    >
      {children}
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',     // ocupa todo el ancho del contenedor padre
    borderRadius: 8,
  },
  content: {
    paddingVertical: 4, // un poco más de alto que el botón default de Paper
  },
})

export default AppButton
