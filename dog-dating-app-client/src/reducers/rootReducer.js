import { combineReducers } from 'redux'
import { locationsReducer } from './locationsReducer'
import { petsReducer } from './petsReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    locations: locationsReducer,
    pets: petsReducer,
    users: usersReducer
})