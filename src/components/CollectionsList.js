import { FlatList, View, StyleSheet } from 'react-native';

import CollectionListItem from './CollectionListItem';

const CollectionsList = ({ data }) => {
  
  const renderListItem = ({ item }) => <CollectionListItem collection={item} />

  return (
    <View style={styles.collections_list}>
      <FlatList
        data={data}
        renderItem={renderListItem}
        style={styles.flat_list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  collections_list: {
    flex: 1,
  },

  flat_list: {
    padding: 20,
  }
})

export default CollectionsList
