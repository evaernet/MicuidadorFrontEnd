import { View, Text } from 'react-native'
import React from 'react'
import AuthHeader from '@/components/AuthHeader'

const registerowner = () => {
  return (
    <View>
      <AuthHeader
        titulo = "Crear cuenta"
        subtitulo="Completá tus datos"
      />
    </View>
  )
}

export default registerowner