import { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'
import CustomImageInput from '../components/CustomImageInput'

import { CollectionContext } from '../contexts/CollectionContext'

const EditCollectionScreen = ({ route, navigation }) => {
  const { createCollection } = useContext(CollectionContext)

  const [action, setAction] = useState()
  const [collectionId, setCollectionId] = useState()

  const [collection, setCollection] = useState({})

  // state for the form inputs
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    setAction(route.params?.action)
  }, [])

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync()

    // Stop running the function here if the user cancelled the dialog
    if (pickerResult.cancelled === true) {
      return
    }

    // Store away the picked image uri
    setSelectedImage({ localUri: pickerResult.uri })
  }

  const handlePressCreate = () => {
    const newCollection = {
      key: Math.random() * 10,
      title: title,
      desc: desc,
      thumbnailLocalUri: selectedImage.localUri,
      cardsList: [],
    }

    createCollection(newCollection)
    
    navigation.goBack()
  }

  const handlePressUpdate = () => { }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.headerMainWrapper}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Preencha os dados da coleção</Text>
          </View>
          <View style={styles.main}>
            <CustomTextInput
              value={title}
              onChangeText={(value) => setTitle(value)}
              placeholder='Titulo'
            />
            <CustomTextInput
              value={desc}
              onChangeText={(value) => setDesc(value)}
              placeholder='Descrição'
              multiline={true}
              numberOfLines={4}
            />
            <CustomImageInput
              selectedImage={selectedImage}
              openImagePickerAsync={openImagePickerAsync}
            />
          </View>
          <CustomButton
            title={action === 'create' ? 'Cadastrar' : 'Atualizar'}
            type='primary'
            onPress={action === 'create' ? handlePressCreate : handlePressUpdate}
          />
        </View>
        <View style={styles.footer}>
          <CustomButton
            title='Cancelar'
            type='outline'
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // ! EditCollectionScreen styles
  container: {
    flex: 1,
    backgroundColor: '#332e56',
    padding: 20,
  },

  body: {
    flex: 1,
    minWidth: 300,
    justifyContent: 'space-between',
  },

  headerMainWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  header: {},

  headerText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#fff',
  },

  main: {
    marginTop: '10%',
    marginVertical: 18,
  },

  footer: {},

})

export default EditCollectionScreen
