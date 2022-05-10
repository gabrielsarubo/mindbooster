import { ActivityIndicator, Text, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

import CustomTextInput from './CustomTextInput'
import CustomButton from './CustomButton'

import { globalStyles } from '../../styles/global'

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
                <Text style={globalStyles.errorText}>
                  {props.errors.email && 'Email não é válido\n'}
                  {props.errors.password && 'Senha não é válida\n'}
                </Text>
              </View>
            )}
        </>
      )}
    </Formik>
  )
}

export default SignInForm