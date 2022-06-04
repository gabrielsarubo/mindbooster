import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from "react-redux"

import MainNavigator from './Drawer'
import AuthNavigator from './AuthStack'

const AppRoute = () => {
  const userToken = useSelector(state => state.user.userToken)
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if (userToken == null) {
      setIsSignedIn(false)
    } else {
      setIsSignedIn(true)
    }
  }, [userToken])

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
