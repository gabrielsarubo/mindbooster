import { TextInput, StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const CustomTextInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  console.log(value, secureTextEntry)
  return (
    <TextInput
      value={value}
      onChangeText={value => onChangeText(value)}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 8,
    backgroundColor: colors.inputBackground,
    borderRadius: 4,
  },
})
 
export default CustomTextInput
