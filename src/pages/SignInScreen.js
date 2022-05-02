import { SafeAreaView } from 'react-native-safe-area-context'

import { useState } from 'react'

import { Image, Text, View, StyleSheet } from 'react-native'

// Custom Components
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = () => {
    // console.log(email, password)
  }
  
  return (
    <SafeAreaView style={styles.bodyContainer}>
      {/* // ! Logo Container */}
      <View style={styles.logoContainer}>
        <Image source={{ uri: require('../../assets/logo-mindbooster.png'), width: 90, height: 93, }} />
        <Image source={{ uri: require('../../assets/logotype-mindbooster.png'), width: 230, height: 64, }} />
      </View>

      {/* // ! Form Container */}
      <View style={styles.formContainer}>
        <CustomTextInput
          value={email}
          onChangeText={setEmail}
          placeholder='Email'
        />
        <CustomTextInput
          value={password}
          onChangeText={setPassword}
          placeholder='Senha'
          secureTextEntry
        />
        <Text style={styles.forgotPassword}>
          Esqueci a senha
        </Text>
        <CustomButton
          title='Entrar'
          onPress={handleSubmit}
          type='primary'
        />
      </View>

      {/* // ! Bottom container */}
      <View style={styles.bottomContainer}>
        <CustomButton title='Cadastre-se' type='secondary' />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    backgroundColor: '#454161',
    color: '#fdfdfd',
  },  
  
  logoContainer: {
    marginTop: '20%',
    alignItems: 'center',
  },

  formContainer: {
    marginTop: '-20%',
  },

  forgotPassword: {
    textAlign: 'right',
    color: '#dcdcdc',
    marginTop: -4,
    marginBottom: 24,
  },
  
  bottomContainer: {
    marginBottom: 32,
  },
})
 
export default SignInScreen
