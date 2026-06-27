import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '@/components/AuthHeader'
import { Button, TextInput } from 'react-native-paper'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'


const Login = () => {
  const [email, setEmail] = useState('')       
  const [password, setPassword] = useState('')

  //para controlar si se muestra la contraseña
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()



  return (
    <View
     style={styles.container}>
      <AuthHeader
        titulo="Bienvenido de vuelta"
        subtitulo="Ingresá para continuar"
        />
        <View style={styles.textcontainer}>
            <TextInput
            mode='outlined'
            label="Email"
            value={email}
            placeholder="jemplo@email.com"
            keyboardType="email-address"
            onChangeText={(texto) => setEmail(texto)}
            style={styles.input}
            />
            <TextInput 
            mode='outlined'
            label="Contraseña"
            value={password}
            placeholder='*******'
            onChangeText={(texto) => setPassword(texto)}
            secureTextEntry={!showPassword}
            right={
            // TextInput.Icon es el ícono adentro del input
            // cuando lo apretás, cambia showPassword de true a false y viceversa
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
            }
            style={styles.input}
            />

            <View style={styles.forgetpassword}>
                 <TouchableOpacity onPress={() => console.log('olvide contasenia')} >
                    <Text style={styles.texttouch}> Olvide contraseña</Text>
                 </TouchableOpacity>
            </View>
           
            <Button 
               mode='contained'
               onPress={() => console.log("Boton ingresar")}
               style={styles.buttoningresar}
               labelStyle={{color:Colors.surface, fontSize:18, fontWeight:400}}
               >
                Ingresar
            </Button>

            <View style={styles.textlogo}>
                <View style={styles.textIngresar}>
                    <View style={styles.separador}>
                    </View>
                   <Text style={{fontSize:16}}>
                       Continuar con
                    </Text>
                   <View style={styles.separador}>
                   </View>
                </View>
                      
                <TouchableOpacity onPress={() => console.log("Google")}>
                    <Image source={require('../../assets/images/googlelogo.png')} style={{width:40, height:40}}/>
                </TouchableOpacity>
                

                <View style={styles.registrate}>
                    <Text>¿No tenés cuenta?</Text>
                    <TouchableOpacity onPress= { () => router.push('/role')}>
                        <Text style={styles.texttouch}>Crear cuenta</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    textcontainer:{
        flex:1,
        alignItems:'center',
        gap:16,
        marginTop:64

    },
    input: {
    marginTop:16,
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    width:340,
    
  },
  buttoningresar:{
    padding:8,
    width:340,
    backgroundColor: Colors.primary

  },
  textIngresar: {
    flexDirection:'row',
    gap:8,
    alignItems:'center'

  },
  textlogo:{
    alignItems:'center',
    gap:16,
  },
  forgetpassword:{
    alignItems:'flex-end',
    width:340,
    marginRight:16
  },
  registrate: {
    flexDirection:'row',
    gap:8,
    marginTop: 32
  },
  texttouch:{
    color: Colors.link,
    fontWeight:'400'
  },
  separador:{
    height:2,
    width:100,
    backgroundColor: Colors.border
  }
})

export default Login