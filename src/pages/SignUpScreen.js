import { SafeAreaView } from 'react-native-safe-area-context'

import { useState } from 'react'

import { Image, Text, View, StyleSheet } from 'react-native'

// Custom Components
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  
  const handleSubmit = () => {
    // console.log(email, password)
  }
  
  return (
    <SafeAreaView style={styles.bodyContainer}>
      {/* // ! Logo Container */}
      <View style={styles.logoContainer}>
        <Image source={{ uri: require('../../assets/logo-mindbooster-90x90.png'), width: 40, height: 40, }} style={styles.logo} />
        <Image source={{ uri: require('../../assets/logotype-mindbooster.png'), width: 150, height: 40, }} style={styles.logotype} />
      </View>

      {/* // ! Form Container */}
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.h2}>
            Preencha os dados do seu cadastro
          </Text>
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
        <CustomButton
          title='Cadastrar'
          onPress={handleSubmit}
          type='primary'
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
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },

  logotype: {
    marginHorizontal: 8,
  },

  h2: {
    color: '#dcdcdc',
    fontSize: 24,
    marginBottom: 32,
  },

  inputWrapper: {
    marginBottom: 16,
  },
  
  bottomContainer: {
    marginBottom: 32,
  },
})
 
export default SignUpScreen
