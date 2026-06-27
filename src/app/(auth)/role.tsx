import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import AuthHeader from '@/components/AuthHeader';
import { Card, Text as PaperText } from 'react-native-paper';
import { Colors } from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';    //para usar iconos con react native paper
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Rol = 'owner' | 'carer';

const Role = () => {

  const router = useRouter()

  const elegirRol = (rol: Rol) : void =>{
    router.push('/')

  }

  return (
    <View>
       <AuthHeader
          titulo="¿Cómo vas a usar MiCuidador?"
          subtitulo="Podés cambiar esto más adelante"
        />

        <View style={styles.containerCards}>
          <Card onPress={() => router.push('/registerowner')}
          mode="outlined"
          style={styles.card}
          >
          <Card.Content style={styles.cardcontainer}>
            <MaterialIcons name="pets" size={48} color={Colors.primaryDark} />
            <PaperText variant="titleLarge"style={styles.textcard}>Dueño de mascota</PaperText>
            <PaperText variant="titleSmall" style={styles.textcard}>Buscá hospedaje y reservá para tu mascota</PaperText>
          </Card.Content>
          </Card>

          <Card onPress={() => router.push('/registercarer')}
          mode="outlined"
          style={styles.card}
          >
          <Card.Content style={styles.cardcontainer}>
            <FontAwesome5 name="house-user" size={48} color={Colors.primaryDark} />
            <PaperText variant="titleLarge" style={styles.textcard}>Cuidador</PaperText>
            <PaperText variant="titleSmall" style={styles.textcard}>Ofrecé tu hogar y generá ingresos cuidando mascotas</PaperText>
          </Card.Content>
          </Card>

        </View>
        


    </View>

  )
}

const styles= StyleSheet.create({
  card:{
    width:'80%',
    backgroundColor: Colors.surface,
    height:'auto',
    borderColor:Colors.border,
    borderWidth:2    
  },
  containerCards:{
    alignItems:'center',
    gap:32,
    marginTop:64
    
  },
  cardcontainer:{
    alignItems:'center',
    
  },
  textcard:{
    color: Colors.textPrimary,
    textAlign:'center'

  }
})

export default Role