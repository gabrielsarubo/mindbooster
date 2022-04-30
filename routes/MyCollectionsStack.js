import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyCollectionsScreen from "../src/pages/MyCollectionsScreen";
import CardsScreen from "../src/pages/CardsScreen";

import Header from "../src/components/Header";

const Stack = createNativeStackNavigator()

export default function MyCollectionsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 55,
          backgroundColor: '#4a4568',
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
        headerTitleContainerStyle: {
          marginLeft: 0,
        }
      }}
    >
      <Stack.Screen
        name='MyCollections'
        component={MyCollectionsScreen}
        options={({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} title='Minhas Coleções' />,
            }
          }
        }
      />
      <Stack.Screen
        name='Cards'
        component={CardsScreen}
        options={({ route }) => ({ title: route.params?.collection.title })}
      />
    </Stack.Navigator>
  )
}
