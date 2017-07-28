let defaultAppState = {
  showAlert: false,
  alertMsg: '默认 MSG'
}

export default function appReducer(state=defaultAppState, action) {
  switch (action.type) {
    case 'SHOW_ALERT':
      return { ...state, showAlert: true, alertMsg: action.msg }
    case 'HIDE_ALERT':
      return { ...state, showAlert: false, alertMsg: '' }
    default:
      return state
  }
}
