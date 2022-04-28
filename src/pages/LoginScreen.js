import { SafeAreaView } from 'react-native-safe-area-context'

import { useState } from 'react'

import { Text, View, StyleSheet } from 'react-native'

import { globalStyles } from '../../styles/global'

// Custom Components
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = () => {
    // console.log(email, password)
    navigation.navigate('Menu')
  }
  
  return (
    <SafeAreaView style={globalStyles.bodyContainer}>
      {/* // ! Logo Container */}
      <View style={[styles.logoContainer, globalStyles.border]}>
        <Text>MindBooster</Text>
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
        <Text style={[globalStyles.border]} >
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
        <CustomButton title='Cadastre-se' />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bottomContainer: {
    marginBottom: 32,
  },
})
 
export default LoginScreen
