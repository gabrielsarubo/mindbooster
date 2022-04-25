import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import LoginScreen from './src/pages/LoginScreen'
import SigninScreen from './src/pages/SigninScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false, }}
          />
          <Stack.Screen 
            name='Signin'
            component={SigninScreen}
            options={{ headerShown: false, }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
 
export default App
