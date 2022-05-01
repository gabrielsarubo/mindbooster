import { TextInput, StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const CustomTextInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {
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
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: 8,
    backgroundColor: colors.inputBackground,
    borderRadius: 4,
    fontSize: 16,
  },
})
 
export default CustomTextInput
