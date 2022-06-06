import { View, Text, Image, StyleSheet } from 'react-native'

import PlaceholderAvatar from '../../assets/placeholder-avatar.png'

const DrawerItemProfile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={PlaceholderAvatar}
          style={styles.profilePic}
        />
      </View>
      <View style={styles.picLabelWrapper}>
        <Text style={styles.picLabel}>Jane Doe</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 32,
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 140,
    borderWidth: 1,
    borderColor: '#3A3361',
  },
  picLabelWrapper: {
    alignItems: 'center',
    marginTop: 12,
  },
  picLabel: {
    fontSize: 19,
    fontWeight: '600',
    color: '#fdfdfd',
  },
})

export default DrawerItemProfile
