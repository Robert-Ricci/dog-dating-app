export const locationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LOCATIONS':
            return action.locations
        default: 
            return state
        }
    }