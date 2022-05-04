import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyCollectionsScreen from "../src/pages/MyCollectionsScreen";
import CollectionScreen from "../src/pages/CollectionScreen";

import Header from "../src/components/Header";

const Stack = createNativeStackNavigator()

export default function MyCollectionsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerStyle: {
          backgroundColor: '#4a4568',
        },
        headerTintColor: '#fff',
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
        name='Collection'
        component={CollectionScreen}
        options={({ route }) => ({ title: route.params?.collection.title })}
      />
    </Stack.Navigator>
  )
}
