import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  floatingButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 15,
  },

  // Basic form styles
  inputWrapper: {
    marginBottom: 16,
  },

  forgotPassword: {
    textAlign: 'right',
    color: '#dcdcdc',
    marginTop: -4,
  },

  // Error messages and feedback
  errorContainer: {
    borderWidth: 2,
    borderColor: '#FC9191',
    backgroundColor: '#FB5555',
    padding: 10,
    borderRadius: 6,
    marginTop: 16,
  },

  errorText: {
    fontSize: 16,
    color: '#fff',
  },
})
