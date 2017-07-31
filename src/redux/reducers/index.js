import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import dishReducer from './dishReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers({
  account: accountReducer,
  app: appReducer,
  dish:dishReducer
})

export default rootReducer
