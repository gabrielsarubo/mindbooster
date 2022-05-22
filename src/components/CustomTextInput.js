import { TextInput, StyleSheet } from 'react-native'

import colors from '../styles/colors'

const CustomTextInput = ({
  value, onChangeText, placeholder, secureTextEntry,
  multiline, numberOfLines, keyboardType = 'default',
  autoCapitalize = 'sentences'
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={value => onChangeText(value)}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical='top'
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: colors.inputBackground,
    borderRadius: 4,
    fontSize: 16,
  },
})

export default CustomTextInput
