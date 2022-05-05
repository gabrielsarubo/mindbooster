import { View, Text, StyleSheet } from 'react-native'

const Flashcard = ({ card, isFlipped }) => {
  return (
    <View style={styles.flashcard}>
      {isFlipped
        ? (<>
          <View style={[styles.row, styles.topRow]}>
            <View style={styles.rowContent}>
              <Text style={styles.label}>Frente</Text>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>{card.front}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.row, styles.bottomRow]}>
            <View style={styles.rowContent}>
              <Text style={styles.label}>Verso</Text>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>{card.back}</Text>
              </View>
            </View>
          </View>
        </>)
        : (<Text style={styles.title}>{card.front}</Text>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  flashcard: {
    minHeight: 380,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
  },

  row: {
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

  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#222',
    textDecorationLine: 'underline',
  },
})

export default Flashcard
