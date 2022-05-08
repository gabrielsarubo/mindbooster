import { SafeAreaView } from 'react-native-safe-area-context'

import firebase from '../config/firebase'
import 'firebase/auth'

import { useState } from 'react'

import { ActivityIndicator, Image, Text, View, StyleSheet } from 'react-native'

// Custom Components
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

import Logo from '../../assets/logo-mindbooster-90x90.png'
import Logotype from '../../assets/logotype-mindbooster.png'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Helper states
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true)

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        alert('Usuário ou senha incorreto!')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <SafeAreaView style={styles.bodyContainer}>
      {/* // ! Logo Container */}
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Image source={Logotype} style={styles.logotype} />
      </View>

      {/* // ! Form Container */}
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
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
        </View>
        {isLoading
          ? <ActivityIndicator color='#fff' />
          : (
            <CustomButton
              title='Entrar'
              onPress={handleSubmit}
              type='primary'
            />
          )
        }
      </View>

      {/* // ! Bottom container */}
      <View style={styles.bottomContainer}>
        <CustomButton title='Cadastre-se' type='secondary' onPress={() => navigation.navigate('SignUp')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#454161',
    color: '#fdfdfd',
  },

  logoContainer: {
    marginTop: '20%',
    alignItems: 'center',
  },

  logo: {
    width: 90,
    height: 90,
  },

  logotype: {
    width: 230,
    height: 64,
    marginHorizontal: 8,
  },

  formContainer: {
    marginTop: '-20%',
  },

  inputWrapper: {
    marginBottom: 16,
  },

  forgotPassword: {
    textAlign: 'right',
    color: '#dcdcdc',
    marginTop: -4,
  },

  bottomContainer: {
    marginBottom: 32,
  },
})

export default SignInScreen
