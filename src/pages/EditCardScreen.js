import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import CustomButton from '../components/CustomButton'

const EditCardScreen = ({ route }) => {
  const [action, setAction] = useState()
  
  useEffect(() => {
    setAction(route.params?.action)
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.headerMainWrapper}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Preencha os dados do cartão</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.form}>
              <View style={[styles.formRow, styles.topRow]}>
                <View style={styles.rowContent}>
                  <Text style={styles.label}>Frente</Text>
                  <View style={styles.titleWrapper}>
                    <TextInput
                      placeholder='Digite aqui...'
                      style={styles.textInput}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.formRow, styles.bottomRow]}>
                <View style={styles.rowContent}>
                  <Text style={styles.label}>Verso</Text>
                  <View style={styles.titleWrapper}>
                    <TextInput
                      placeholder='Digite aqui...'
                      style={styles.textInput}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <CustomButton
            title={ action === 'create' ? 'Cadastrar' : 'Atualizar' }
            type='primary'
          />
        </View>
        <View style={styles.footer}>
          <CustomButton
            title='Cancelar'
            type='outline'
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // ! EditCardScreen styles
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

  form: {
    minHeight: 380,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
  },

  formRow: {
    flexGrow: 1,
    width: '100%',
    paddingVertical: 18,
  },

  topRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#CECECE',
    borderStyle: 'dashed',
  },

  bottomRow: {},

  rowContent: {
    flexGrow: 1,
  },

  titleWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontSize: 15,
    color: '#777',
  },

  // ! TextInput styles
  textInput: {
    width: '100%',
    fontSize: 28,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },

  footer: {},

})

export default EditCardScreen
