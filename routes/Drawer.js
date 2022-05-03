import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

import MyCollectionsStack from './MyCollectionsStack'

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
        component={MyCollectionsStack}
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
        onPress={() => console.log('Singing out...')}
        icon={props => <MaterialIcons name='logout' size={props.size} color={props.color} />}
      />
    </DrawerContentScrollView>
  )
}
