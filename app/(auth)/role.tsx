import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Rol = 'owner' | 'carer';

const role = () => {

  const router = useRouter;

  const elegirRol = (rol: Rol) : void =>{
    router.push('/')

  }

  return (
    <View>
      <Text>hola desde role</Text>
    </View>
  )
}

export default role