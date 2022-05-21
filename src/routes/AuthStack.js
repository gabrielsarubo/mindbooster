import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignInScreen from "../pages/SignInScreen"
import SignUpScreen from "../pages/SignUpScreen"

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
        options={{ headerShown: false, }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{ headerShown: false, }}
      />
    </Stack.Navigator>
  )
}
