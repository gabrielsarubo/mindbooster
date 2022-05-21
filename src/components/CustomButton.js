import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import colors from '../styles/colors'

const CustomButton = ({ title, onPress, type }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles[type]]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  
  primary: {
    backgroundColor: colors.lightPurple,
  },

  secondary: {
    backgroundColor: colors.pink,
  },
  
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },

  play: {
    paddingHorizontal: 32,
    backgroundColor: colors.green,
  },

  title: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
    alignSelf: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
})
 
export default CustomButton
