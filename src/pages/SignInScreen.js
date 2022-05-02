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
        <Image source={{ uri: require('../../assets/logo-mindbooster-90x90.png'), width: 90, height: 90, }} />
        <Image source={{ uri: require('../../assets/logotype-mindbooster.png'), width: 230, height: 64, }} />
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
        <CustomButton
          title='Entrar'
          onPress={handleSubmit}
          type='primary'
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
    color: '#fdfdfd',
  },  
  
  logoContainer: {
    marginTop: '20%',
    alignItems: 'center',
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
