import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'

const CardsScreen = ({ route }) => {
  
  console.log(route.params.collection);
  
  return (
    <SafeAreaView>
      <Text>Cards Screen</Text>
    </SafeAreaView>
  )
}
 
export default CardsScreen
