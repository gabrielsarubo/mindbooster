import 'react-native-gesture-handler'

import { Provider } from 'react-redux'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppRoute from './src/routes'

import CollectionContextProvider from './src/contexts/CollectionContext'

// Redux store
import { store } from './src/state/store'

const App = () => {
  return (
    <Provider store={store}>
      <CollectionContextProvider>
        <SafeAreaProvider>
          <StatusBar style='light' />
          <AppRoute />
        </SafeAreaProvider>
      </CollectionContextProvider>
    </Provider>
  )
}

export default App
