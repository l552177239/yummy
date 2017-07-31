import { combineReducers } from 'redux'
import commentReducer from './commentReducer'
import accountReducer from './accountReducer'
import dishReducer from './dishReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers({
  comment: commentReducer,
  account: accountReducer,
  app: appReducer,
  dish:dishReducer
})

export default rootReducer
