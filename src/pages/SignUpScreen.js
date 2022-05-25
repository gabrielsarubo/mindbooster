import { SafeAreaView } from 'react-native-safe-area-context'

import { useState } from 'react'
// Redux and actions
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../store/actions'

import { Alert, Image, Text, View, StyleSheet } from 'react-native'

// Custom Components
import SignUpForm from '../components/SignUpForm'
import CustomButton from '../components/CustomButton'

import Logo from '../../assets/logo-mindbooster-90x90.png'
import Logotype from '../../assets/logotype-mindbooster.png'

const SignUpScreen = ({ navigation }) => {
  // Redux action dispatchers
  const dispatch = useDispatch()
  const { signUp } = bindActionCreators(actionCreators, dispatch)
  
  // Helper states and variables
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (values) => {
    const { email, password } = values
    
    setIsLoading(true)

    signUp(email,password)
      .then(() => {
        console.log('New user added!')
        Alert.alert(
          'Conta Criada',
          `Sua nova conta com o email ${email} foi criada com sucesso`,
          [{ text: 'Ir para tela inicial', onPress: () => console.log('Going to Home...'), }]
        )
      })
      .catch(error => {
        Alert.alert(
          'Ops, algo deu errado',
          error.message,
          [{ text: 'OK', onPress: () => console.log('OK Pressed'), }]
        )
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
        
        <SignUpForm
          isLoading={isLoading}
          handleSignUp={handleSubmit}
        />
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

  bottomContainer: {
    marginBottom: 32,
  },
})

export default SignUpScreen
