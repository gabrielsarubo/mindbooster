import { View, Text } from 'react-native'

const CardsScreen = ({ route }) => {
  
  console.log(route.params.collection);
  
  return (
    <View>
      <Text>Cards Screen</Text>
    </View>
  )
}
 
export default CardsScreen
