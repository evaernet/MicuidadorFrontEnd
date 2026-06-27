import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

type InputFieldProps = {
    label:string     // el texto de la label flotante
    value:string        // lo que hay escrito ahora
    onChangeText : (text : string) => void    // función para actualizar el valor
    placeholder?:string     // función para actualizar el valor
    error?:boolean         // opcional, pone borde rojo
    secureTextEntry?:boolean     // opcional, para contraseñas
    keyboardType?:'default' | 'email-address' | 'numeric'  // opcional
    right?:React.ReactNode      // opcional, ícono a la derecha

}

const InputField = ({
    label,
    value,
    onChangeText,
    secureTextEntry,
    placeholder,
    keyboardType = 'default',
    right,
    error = false,

}: InputFieldProps) => {
  return (
    <TextInput
    mode="outlined"   // borde completo alrededor
    label={label}     // la label que sube cuando tocás
    value={value}   // el valor actual que viene de afuera
    onChangeText={onChangeText}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}    // true = muestra ••••
    keyboardType={keyboardType}
    error={error}             // true = borde y label en rojo
    right={right}     
    style={styles.input}        // ícono opcional a la derecha
    />
  )
}

const styles = StyleSheet.create({
    input:{
        width:'50%',
        height:20

    }

})

export default InputField