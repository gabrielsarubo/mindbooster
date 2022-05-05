import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import CustomButton from '../components/CustomButton'
import Flashcard from '../components/Flashcard'

const PlayScreen = ({ route, navigation }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [cards, setCards] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // TODO change this to getParams()
    setCards(route.params?.cards)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {cards.length > 0
          ? <>
            <View style={styles.header}>
              <Text style={styles.counter}>Cartão {`${index + 1}/${cards.length}`}</Text>
            </View>

            <View style={styles.main}>
              <Flashcard
                card={cards[index]}
                isFlipped={isFlipped}
              />
            </View>

            <View style={styles.footer}>
              {(index === (cards.length - 1)) && (isFlipped)
                ? (
                  <CustomButton
                    title='Finalizar'
                    type='secondary'
                    onPress={() => navigation.goBack()}
                  />
                )
                : (
                  <CustomButton
                    title={isFlipped ? 'Próximo' : 'Virar'}
                    type='primary'
                    onPress={
                      isFlipped
                        ? (() => {
                          setIndex(index + 1)
                          setIsFlipped(false)
                        })
                        : (() => setIsFlipped(!isFlipped))}
                  />
                )
              }
            </View>
          </>
          : <Text>Loading...</Text>
        }
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
