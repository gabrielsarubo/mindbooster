import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

// Pages
import MyCollectionsScreen from '../pages/MyCollectionsScreen'

// Icons
import { MaterialIcons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator()

const Menu = () => {
  return (
    <Drawer.Navigator
      initialRouteName='MyCollections'
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          height: 55,
          backgroundColor: '#4a4568',
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
        headerTitleContainerStyle: {
          marginLeft: 0,
        }
      }}
    >
      <Drawer.Screen
        name='MyCollections'
        component={MyCollectionsScreen}
        options={{
          title: 'Minhas Coleções',
          drawerIcon: config => <MaterialIcons name='home' size={config.size} color={config.color} />
        }}
      />
    </Drawer.Navigator>
  )
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props} />
      <DrawerItem 
        label='Logout'
        onPress={() => props.navigation.popToTop()}
        icon={props => <MaterialIcons name='logout' size={props.size} color={props.color} />}
      />
    </DrawerContentScrollView>
  )
}
 
export default Menu
