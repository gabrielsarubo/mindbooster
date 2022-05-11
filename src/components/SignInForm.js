import { ActivityIndicator, Text, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

import CustomTextInput from './CustomTextInput'
import CustomButton from './CustomButton'

import { globalStyles } from '../../styles/global'

const SignInSchema = yup.object({
  email: yup.string()
    .email('Email não é válido')
    .required('O email é obrigatório'),
  password: yup.string()
    .required('A senha é obrigatória'),
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
          <View style={globalStyles.inputWrapper}>
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
            <Text style={globalStyles.forgotPassword}>
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
          {
            ((props.touched.email && props.errors.email) || (props.touched.password && props.errors.password))
            && (
              <View style={globalStyles.errorContainer}>
                <Text style={globalStyles.errorText}>{props.errors.email}</Text>
                <Text style={globalStyles.errorText}>{props.errors.password}</Text>
              </View>
            )}
        </>
      )}
    </Formik>
  )
}

export default SignInForm