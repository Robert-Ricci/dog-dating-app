export const petsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PETS':
            return action.pets
        default: 
            return state
        }
    }