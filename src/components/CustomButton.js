import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const CustomButton = ({ title, onPress, type }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles({ type }).button}
    >
      <Text style={styles().title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = (props) => StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor:
      props?.type === 'primary'
        ? colors.lightPurple
        : props?.type === 'secondary'
          ? colors.pink
          : '#51966a',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
})
 
export default CustomButton
