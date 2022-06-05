import { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'
import CustomImageInput from '../components/CustomImageInput'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../store/actions'

const EditCollectionScreen = ({ route, navigation }) => {
  // Redux Dispatchers 
  const collections = useSelector(state => state.collection.collections)
  const dispatch = useDispatch()
  const { createCollection, updateCollectionMetada } = bindActionCreators(actionCreators, dispatch)

  // DEPRECATED const { collections, createCollection, editCollectionMetadata } = useContext(CollectionContext)

  const [action, setAction] = useState()
  const [collectionId, setCollectionId] = useState()

  // state for the form inputs
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const { action, collectionId, thumbnailUrl } = route.params
    
    setAction(action)
    setCollectionId(collectionId)

    // If user wants to edit a collection,
    // then recover collection data from CollectionContext and store it away in state
    if (action === 'edit') {
      const _collection = collections.find(collection => collection.id === collectionId)

      setTitle(_collection.title)
      setDesc(_collection?.desc)
      setSelectedImage({ localUri: thumbnailUrl })
    }
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

  /**
   * Converte uma imagem para um Blob
   * @param {String} uri image local uri retrived from ImagePicker
   * @returns {Blob} uma variavel do tipo Blob que corresponde a imagem
   */
  const convertImageURIToBlob = async (uri) => {
    try {
      const response = await fetch(uri)
      const blob = await response.blob()
      return blob
    } catch (error) {
      throw new Error(error)
    }
  }

  const handlePressCreate = () => {
    const newCollection = {
      title: title,
      desc: desc,
    }

    const uri = selectedImage.localUri
    const filename = uri.slice(uri.lastIndexOf('/')+1, uri.length)

    convertImageURIToBlob(uri)
      .then(blob => {
        // Successfully converted image URI to Blob
        // Create obj to store blob and image name
        const imageData = {
          blob,
          contentType: blob.type,
          filename
        }
        createCollection(newCollection, imageData)
        navigation.goBack()
      })
      .catch(() => {
        alert('Algum erro aconteceu ao tentar converter a imagem de thumbnail.')
      })
  }

  const handlePressUpdate = () => {    
    const newMetadata = {
      title: title,
      desc: desc,
    }

    if (selectedImage?.localUri) {
      const uri = selectedImage.localUri
      const filename = uri.slice(uri.lastIndexOf('/') + 1, uri.length)

      convertImageURIToBlob(uri)
        .then(blob => {
          // Successfully converted image URI to Blob
          // Create obj to store blob and image name
          const imageData = {
            blob,
            contentType: blob.type,
            filename
          }
          updateCollectionMetada(collectionId, newMetadata, imageData)
          navigation.goBack()
        })
        .catch(() => {
          alert('Algum erro aconteceu ao tentar converter a imagem de thumbnail.')
        })
    } else {
      updateCollectionMetada(collectionId, newMetadata)
      navigation.goBack()
    }
  }

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
              selectedImage={selectedImage?.localUri}
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
