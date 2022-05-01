import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const CardListItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.cardListItem}>
        <View style={styles.wrapperContent}>
          <View style={styles.content}>
            <Text style={styles.label}>Frente</Text>
            <Text style={styles.title} numberOfLines={1}>{item.front}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Verso</Text>
            <Text style={styles.title} numberOfLines={1}>{item.back}</Text>
          </View>
        </View>
        <View style={styles.wrapperButtons}>
          <View style={styles.button}><MaterialIcons name='create' size={28} color='#4472C4' /></View>
          <View style={styles.button}><MaterialIcons name='delete-forever' size={28} color='#E91010' /></View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardListItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
  },

  wrapperContent: {
    flexDirection: 'row',
  },

  content: {
    width: 100,
    maxWidth: 100,
    marginRight: 16,
  },

  label: {
    color: '#a5a5a5',
    fontSize: 13,
    letterSpacing: 0,
  },

  title: {
    fontWeight: '700',
    fontSize: 24,
    color: '#27ACA7',
  },

  wrapperButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    marginLeft: 10,
  },
})
 
export default CardListItem