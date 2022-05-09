import { SafeAreaView } from 'react-native-safe-area-context'

import firebase from '../config/firebase'
import 'firebase/auth'

import { useState } from 'react'

import { Alert, ActivityIndicator, Image, Text, View, StyleSheet } from 'react-native'

// Custom Components
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

import Logo from '../../assets/logo-mindbooster-90x90.png'
import Logotype from '../../assets/logotype-mindbooster.png'

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  // Helper states and variables
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true)

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user
        console.log(user)
        Alert.alert(
          'Conta Criada',
          `Sua nova conta com o email ${email} foi criada com sucesso`,
          [{ text: 'Ir para tela inicial', onPress: () => console.log('Going to Home...'), }]
        )
      })
      .catch(() => {
        Alert.alert(
          'Ops, algo deu errado',
          'Confira suas informações',
          [{ text: 'OK', onPress: () => console.log('OK Pressed'), }]
        )
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
        <Text style={styles.h2}>
          Preencha os dados do seu cadastro
        </Text>
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
          <CustomTextInput
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            placeholder='Confirmar senha'
            secureTextEntry
          />
        </View>
        {isLoading
          ? <ActivityIndicator color='#fff' size={24} />
          : <CustomButton
            title='Cadastrar'
            onPress={handleSubmit}
            type='primary'
          />
        }
      </View>

      {/* // ! Bottom container */}
      <View style={styles.bottomContainer}>
        <CustomButton title='Voltar' type='outline' onPress={() => navigation.goBack()} />
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
    marginTop: 8,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  logo: {
    width: 40,
    height: 40,
  },

  logotype: {
    width: 150,
    height: 40,
    marginHorizontal: 8,
  },

  formContainer: {
    marginTop: -48,
  },

  h2: {
    color: '#dcdcdc',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 48,
  },

  inputWrapper: {
    marginBottom: 16,
  },

  bottomContainer: {
    marginBottom: 32,
  },
})

export default SignUpScreen
