import { ActivityIndicator, Text, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

import CustomTextInput from './CustomTextInput'
import CustomButton from './CustomButton'

import { globalStyles } from '../styles/global'

const SignUpSchema = yup.object({
  email: yup.string()
    .email('Email inválido')
    .required('O email é obrigatório'),
  password: yup.string()
    .required('A senha é obrigatória'),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('A confirmação de senha é obrigatória')
})

const SignUpForm = ({ isLoading, handleSignUp }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '', passwordConfirm: '' }}
      validationSchema={SignUpSchema}
      onSubmit={(values, actions) => {
        handleSignUp(values)
        // actions.resetForm()
      }}
    >
      {(props) => (
        <>
          <View style={globalStyles.inputWrapper}>
            <CustomTextInput
              value={props.values.email}
              onChangeText={props.handleChange('email')}
              placeholder='Email'
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <CustomTextInput
              value={props.values.password}
              onChangeText={props.handleChange('password')}
              placeholder='Senha'
              secureTextEntry
              autoCapitalize='none'
            />
            <CustomTextInput
              value={props.values.passwordConfirm}
              onChangeText={props.handleChange('passwordConfirm')}
              placeholder='Confirmar senha'
              secureTextEntry
              autoCapitalize='none'
            />
          </View>
          {
            isLoading
              ? <ActivityIndicator color='#fff' size={24} />
              : (
                <CustomButton
                  title='Cadastrar'
                  onPress={props.handleSubmit}
                  type='primary'
                />
              )
          }
          {
            ((props.touched.email && props.errors.email)
              || (props.touched.password && props.errors.password)
              || (props.touched.passwordConfirm && props.errors.passwordConfirm))
            && (
              <View style={globalStyles.errorContainer}>
                <Text style={globalStyles.errorText}>{props.errors.email}</Text>
                <Text style={globalStyles.errorText}>{props.errors.password}</Text>
                <Text style={globalStyles.errorText}>{props.errors.passwordConfirm}</Text>
              </View>
            )}
        </>
      )}
    </Formik>
  )
}

export default SignUpForm
