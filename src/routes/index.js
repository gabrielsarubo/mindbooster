import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from "react-redux"

import MainNavigator from './Drawer'
import AuthNavigator from './AuthStack'

const AppRoute = () => {
  const userToken = useSelector(state => state.user.userToken)

  return (
    <NavigationContainer>
      {
        userToken == null
          ? <AuthNavigator />
          : <MainNavigator />
      }
    </NavigationContainer>
  )
}

export default AppRoute
