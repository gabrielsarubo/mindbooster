import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import CustomButton from '../components/CustomButton'
import Flashcard from '../components/Flashcard'

const PlayScreen = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.counter}>Cartão 1/8</Text>
        </View>

        <View style={styles.main}>
          <Flashcard isFlipped={isFlipped} />
        </View>

        <View style={styles.footer}>
          <CustomButton
            title={isFlipped ? 'Próximo' : 'Virar'}
            type='primary'
            onPress={isFlipped ? (() => alert('Next card!')) : (() => setIsFlipped(!isFlipped))}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // ! PlayScreen styles
  container: {
    flex: 1,
    backgroundColor: '#332e56',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    minWidth: 300,
    marginTop: '-5%',
  },

  header: {},

  counter: {
    fontSize: 17,
    textAlign: 'center',
    color: '#fff',
  },

  main: {
    marginTop: '10%',
    marginBottom: '10%',
  },

  footer: {},

})

export default PlayScreen
