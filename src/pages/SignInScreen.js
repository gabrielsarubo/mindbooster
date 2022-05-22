import { SafeAreaView } from 'react-native-safe-area-context'

import { useState } from 'react'
import { Alert, Image, View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
// Action creators
import * as actionCreators from '../state/actions'

// Custom Components
import SignInForm from '../components/SignInForm'
import CustomButton from '../components/CustomButton'

import Logo from '../../assets/logo-mindbooster-90x90.png'
import Logotype from '../../assets/logotype-mindbooster.png'

const SignInScreen = ({ navigation }) => {
  // Removing the line below creates a memory leak warning
  useSelector(state => state.user)

  const dispatch = useDispatch()

  const { logUserIn } = bindActionCreators(actionCreators, dispatch)

  const [isLoading, setIsLoading] = useState(false)

  // Error codes and messages
  const errorMessages = {
    'auth/user-not-found': 'Usuário não encontrado',
    'auth/wrong-password': 'Senha incorreta',
    'auth/invalid-email': 'Email mal formatado',
  }

  const handleSignIn = (values) => {
    // Get values from form fields
    const { email, password } = values

    setIsLoading(true)

    // Capture and handle any error when trying to sign in
    logUserIn(email, password)
      .then(() => {
        console.log('Log in successful')
      })
      .catch(error => {
        Alert.alert(
          getMessageByErrorCode(error.code),
          'Confira suas informações',
          [{ text: 'OK', onPress: () => console.log('Back Pressed') }],
          { cancelable: true, },
        )
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const getMessageByErrorCode = (code) => errorMessages[code] || 'Error desconhecido'

  return (
    <SafeAreaView style={styles.bodyContainer}>
      {/* // ! Logo Container */}
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Image source={Logotype} style={styles.logotype} />
      </View>

      {/* // ! Form Container */}
      <View style={styles.formContainer}>
        <SignInForm
          isLoading={isLoading}
          handleSignIn={handleSignIn}
        />
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
  },

  logoContainer: {
    marginTop: 32,
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
  },

  bottomContainer: {
    marginBottom: 32,
  },
})

export default SignInScreen
