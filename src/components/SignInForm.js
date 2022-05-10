import { ActivityIndicator, Text, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

import CustomTextInput from './CustomTextInput'
import CustomButton from './CustomButton'

const SignInSchema = yup.object({
  email: yup.string()
    .required()
    .email(),
  password: yup.string()
    .required()
    .min(8),
})

const SignInForm = ({ isLoading, handleSignIn }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignInSchema}
      onSubmit={(values, actions) => {
        handleSignIn(values)
        actions.resetForm()
      }}
    >
      {(props) => (
        <>
          <View style={styles.inputWrapper}>
            <CustomTextInput
              value={props.values.email}
              onChangeText={props.handleChange('email')}
              placeholder='Email'
            />
            <CustomTextInput
              value={props.values.password}
              onChangeText={props.handleChange('password')}
              placeholder='Senha'
              secureTextEntry
            />
            <Text style={styles.forgotPassword}>
              Esqueci a senha
            </Text>
          </View>
          {
            isLoading
              ? <ActivityIndicator color='#fff' size={24} />
              : (
                <CustomButton
                  title='Entrar'
                  onPress={props.handleSubmit}
                  type='primary'
                />
              )
          }
        </>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 16,
  },

  forgotPassword: {
    textAlign: 'right',
    color: '#dcdcdc',
    marginTop: -4,
  },
})

export default SignInForm