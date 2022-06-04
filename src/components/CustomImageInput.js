import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const CustomImageInput = ({ openImagePickerAsync, selectedImage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Imagem</Text>
      <View style={styles.body}>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.content}>
          {selectedImage !== null
            ? (
              <Image
                source={{ uri: selectedImage }}
                style={styles.thumbnail}
              />
            )
            : <MaterialIcons name='add' size={56} color='#ccc' onPress={openImagePickerAsync} />
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // CustomImageInput styles
  container: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
  },

  label: {
    opacity: 0.8,
    fontSize: 16,
  },

  body: {
    paddingVertical: 8,
  },

  content: {
    minHeight: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },

  thumbnail: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
})

export default CustomImageInput
