import { TouchableOpacity, StyleSheet } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import colors from '../../styles/colors'

const CustomFloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <MaterialIcons name='add' size={24} color='#fff' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  // ! CustomFloatingButton styles
  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.lightPurple,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
 
export default CustomFloatingButton
