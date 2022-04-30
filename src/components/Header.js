import { Text, View, StyleSheet } from 'react-native'

// Icons
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }) {

  const openMenu = () => {
    navigation.openDrawer()
  }
  
  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={24} color='#fff' onPress={openMenu} />
      <View style={{alignContent: 'center', justifyContent: 'center',}}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 16,
  },
})
