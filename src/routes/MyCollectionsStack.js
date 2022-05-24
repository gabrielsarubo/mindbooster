import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyCollectionsScreen from "../pages/MyCollectionsScreen";
import CollectionScreen from "../pages/CollectionScreen";
import PlayScreen from "../pages/PlayScreen";
import EditCardScreen from "../pages/EditCardScreen";
import EditCollectionScreen from "../pages/EditCollectionScreen";

import Header from "../components/Header";

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
        options={({ route }) => ({ title: route.params?.collectionTitle })}
      />
      <Stack.Screen
        name='Play'
        component={PlayScreen}
        options={({ route }) => ({
          cards: route.params?.cards,
          headerTitle: 'Jogar',
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name='EditCard'
        component={EditCardScreen}
        options={({ route }) => ({
          headerTitle: route.params?.action === 'create' ? 'Novo Cartão' : 'Editar Cartão',
          action: route.params?.action,
          cardId: route.params?.cardId,
          collectionId: route.params?.collectionId,
        })}
      />
      <Stack.Screen
        name='EditCollection'
        component={EditCollectionScreen}
        options={({ route }) => ({
          headerTitle: route.params?.action === 'create' ? 'Nova Coleção' : 'Editar Coleção',
          action: route.params?.action,
          collectionId: route.params?.collectionId,
        })}
      />
    </Stack.Navigator>
  )
}
