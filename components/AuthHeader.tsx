import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'; // ← este, no el de react-native
import { Colors } from '@/constants/Colors';



    //nombre y tipo de datos de mis props
    type AuthHeaderProps ={
        titulo: string,
        subtitulo: string
    }

const AuthHeader = ({titulo, subtitulo}: AuthHeaderProps) => {
   
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerheader}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo}></Image>
            <Text style={styles.TextHeader}>MiCuidador</Text>
        </View>
      <Text style={styles.headertitulo}>{titulo}</Text>
      <Text style={styles.headersubtitulo}>{subtitulo}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:20,
        backgroundColor: Colors.primary,
        height:200
    },

    containerheader:{
        flexDirection:'row',
        alignItems:'center',
        gap:8,
        paddingLeft:16,

    },
    logo:{
        width:50,
        height:40,
    },
    TextHeader:{
        fontSize:32,
        fontWeight: '700',

    },
    headertitulo :{
      paddingLeft:16,
      fontSize:32,
      fontWeight:'bold',
      color: Colors.surface,
    },
    headersubtitulo:{
      paddingLeft:16,
      fontSize:16,
      color: Colors.surface,

    }
})

export default AuthHeader