import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from "react-redux"

import MainNavigator from './Drawer'
import AuthNavigator from './AuthStack'

const AppRoute = () => {
  const isSignedIn = useSelector(state => state.user.isSignedIn)

  return (
    <NavigationContainer>
      {
        isSignedIn
          ? <MainNavigator />
          : <AuthNavigator />
      }
    </NavigationContainer>
  )
}

export default AppRoute
