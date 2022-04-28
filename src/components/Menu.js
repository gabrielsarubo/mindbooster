import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

// Pages
import MyCollectionsScreen from '../pages/MyCollectionsScreen'

// Icons
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

const Drawer = createDrawerNavigator()

const Menu = () => {
  return (
    <Drawer.Navigator
      initialRouteName='MyCollections'
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name='MyCollections'
        component={MyCollectionsScreen}
        options={{
          title: 'Minhas Coleções',
          drawerIcon: config => <Icon name='home' size={config.size} color={config.color} />
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
        icon={props => <Icon name='sign-out' size={props.size} color={props.color} />}
      />
    </DrawerContentScrollView>
  )
}
 
export default Menu
