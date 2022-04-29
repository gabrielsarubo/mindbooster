import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../src/pages/LoginScreen";
import SigninScreen from "../src/pages/SigninScreen";
import Menu from "../src/components/Menu";

const Stack = createNativeStackNavigator()

export default () => {
  return (
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
      <Stack.Screen
        name='Menu'
        component={Menu}
        options={{ headerShown: false, }}
      />
    </Stack.Navigator>
  )
}
