import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'

// Icons
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

const CollectionListItem = ({ collection, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(collection)}>
      <View style={styles.collection_list_item}>
        <View style={styles.wrapper_image_title}>
          <View style={styles.wrapper_image}>
            <Image source={{ uri: 'https://www.freeiconspng.com/uploads/soccer-ball-icon-11.png', width: 75, height: 75, }} />
          </View>
          <View style={styles.wrapper_title}>
            <Text style={styles.title}>{collection.title}</Text>
          </View>
        </View>
        <View style={styles.wrapper_buttons}>
          <View><Icon name='pencil' size={24} color='#4472C4' /></View>
          <View><Icon name='trash' size={24} color='#E91010' /></View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  collection_list_item: {
    padding: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    backgroundColor: 'white',
  },

  wrapper_image_title: {
    flexDirection: 'row',
  },

  wrapper_image: {
    padding: 8,
    marginRight: 8,
  },

  image: {},

  wrapper_title: {
    justifyContent: 'center',
  },

  title: {
    fontWeight: 700,
    fontSize: 28,
    color: '#27ACA7',
  },

  wrapper_buttons: {
    padding: 8,
    justifyContent: 'space-between',
  },
})

export default CollectionListItem
