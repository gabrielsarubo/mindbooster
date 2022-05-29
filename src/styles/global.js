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

  // Container and message for when lists are empty
  infoMessageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 14,
    paddingLeft: 14,
  },

  infoMessage: {
    fontSize: 17,
    lineHeight: 26,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    paddingTop: 16,
    paddingBottom: 16,
  },
})
