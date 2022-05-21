const userLogin = user => ({
  type: 'USER_LOGIN',
  user: user,
})

const userLogout = () => ({
  type: 'USER_LOGOUT',
  user: null,
})
