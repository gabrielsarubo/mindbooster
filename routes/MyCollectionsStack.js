import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyCollectionsScreen from "../src/pages/MyCollectionsScreen";
import CardsScreen from "../src/pages/CardsScreen";

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MyCollections'
        component={MyCollectionsScreen}
        options={{ title: 'Minhas Coleções', }}
      />
      <Stack.Screen
        name='Cards'
        component={CardsScreen}
        options={({ route }) => ({ title: route.params?.collection.title })}
      />
    </Stack.Navigator>
  )
}
