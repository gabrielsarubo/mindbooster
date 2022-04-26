import { StyleSheet } from 'react-native'

import colors from './colors'

export const globalStyles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: 'red',
  },
  
  bodyContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    backgroundColor: colors.darkPurple,
    color: '#fdfdfd',
  },  
})
