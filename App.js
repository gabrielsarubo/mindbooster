import 'react-native-gesture-handler'

import { useState } from 'react'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

import { devToolsEnhancer } from 'redux-devtools-extension'

import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import MainNavigator from './src/routes/Drawer'
import AuthNavigator from './src/routes/AuthStack'

import CollectionContextProvider from './src/contexts/CollectionContext'

import rootReducer from './src/reducers'

const store = createStore(rootReducer, devToolsEnhancer())

const App = () => {
  const [userToken, setUserToken] = useState(false)

  return (
    <Provider store={store}>
      <CollectionContextProvider>
        <SafeAreaProvider>
          <StatusBar style='light' />
          <NavigationContainer>
            {
              userToken
                ? <MainNavigator />
                : <AuthNavigator />
            }
          </NavigationContainer>
        </SafeAreaProvider>
      </CollectionContextProvider>
    </Provider>
  )
}

export default App
