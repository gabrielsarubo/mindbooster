import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

import AuthStack from './AuthStack'

// Icons
import { MaterialIcons } from '@expo/vector-icons'

const RootDrawerNavigator = createDrawerNavigator()

export default function Drawer() {
  return (
    <RootDrawerNavigator.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <RootDrawerNavigator.Screen
        name='Home'
        component={AuthStack}
        options={{
          headerShown: false,
          title: 'Minhas Coleções',
          drawerIcon: config => <MaterialIcons name='home' size={config.size} color={config.color} />
        }}
      />
    </RootDrawerNavigator.Navigator>
  )
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props} />
      <DrawerItem 
        label='Sair'
        onPress={() => props.navigation.popToTop()}
        icon={props => <MaterialIcons name='logout' size={props.size} color={props.color} />}
      />
    </DrawerContentScrollView>
  )
}
