import React from 'react'
import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'


const RootNatigation = () => {
  return (

    <PaperProvider>

      <Stack screenOptions={{headerShown:false}}>

          <Stack.Screen name='index' />

      </Stack>

      
    </PaperProvider>

  )
}

export default RootNatigation