import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigator from './routes/Drawer'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
 
export default App
