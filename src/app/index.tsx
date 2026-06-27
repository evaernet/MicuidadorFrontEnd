import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';

const Index = () => {

    const router = useRouter();

    useEffect(() => {                  //Se ejecuta cuando la pantalla aparece.
        const timer = setTimeout(() => {
            router.replace('/login');
        }, 3000);

        return () => {
            clearTimeout(timer);    //Si el componente se desmonta antes, cancela el temporizador.
        };    
    }, []);    //El array vacío significa: Ejecutar este efecto una sola vez.

  return (
    <View style={styles.container}>
        <View style={{padding:16}}>
            <Image source={require('../assets/images/logo.png')} style={{width:216, height:158}}/>
        </View>
        <View>
            <Text style={styles.textmain}>MiCuidador</Text>
        </View>
        <View>
            <Text style={styles.Textsec}>Tu mascota en las mejores manos</Text>
        </View>
    </View>
  )
}


export default Index

const styles = StyleSheet.create({
    container:{
        flex : 1,
        gap:16,
        backgroundColor: Colors.primary,    
        justifyContent: 'center',
        alignItems:'center',
        
    },
    textmain:{
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily:'roboto',
        color: 'white',
    },
    Textsec:{
        fontWeight:'400',
        fontSize:14,
        color:'white'
    }
})