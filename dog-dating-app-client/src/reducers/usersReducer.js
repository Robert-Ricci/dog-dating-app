export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return action.users
        default: 
            return state
        }
    }