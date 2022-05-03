import 'react-native-gesture-handler'

import { useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import MainNavigator from './routes/Drawer'
import AuthNavigator from './routes/AuthStack'

const App = () => {
  const [userToken, setUserToken] = useState(true)
  
  return (
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
  )
}
 
export default App
