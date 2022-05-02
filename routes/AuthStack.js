import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../src/pages/SignInScreen";
import SignUpScreen from "../src/pages/SignUpScreen";

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator>
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
