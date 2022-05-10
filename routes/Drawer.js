import { View } from 'react-native'

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

import MyCollectionsStack from './MyCollectionsStack'

import DrawerItemProfile from '../src/components/DrawerItemProfile'

// Icons
import { MaterialIcons } from '@expo/vector-icons'

const RootDrawerNavigator = createDrawerNavigator()

export default function Drawer() {
  return (
    <RootDrawerNavigator.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#3B3751',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
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
    <View style={{ flex: 1, backgroundColor: '#25213E' }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemProfile {...props} />
        <DrawerItemList {...props} />
        <DrawerItem
          label='Sair'
          onPress={() => console.log('Singing out...')}
          icon={props => <MaterialIcons name='logout' size={props.size} color='#fff' />}
          labelStyle={{ color: '#fff', marginLeft: -20, }}
        />
      </DrawerContentScrollView>
    </View>
  )
}
