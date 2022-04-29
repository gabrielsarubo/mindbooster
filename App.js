import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigator from './routes/HomeStack'

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
 
export default App
