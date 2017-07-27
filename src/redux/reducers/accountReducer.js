let defaultAccountState = {
  isAuthenticated: false,
  currentUser: ''
}

export default function accountReducer(state=defaultAccountState, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {...state, isAuthenticated: true, currentUser: action.username}
    case 'LOG_OUT':
      return state;
    default:
      return state
  }
}
