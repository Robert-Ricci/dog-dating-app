export const petsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PET':
            return [...state, action.pet]
        case 'FETCH_PETS':
            return action.pets
        default: 
            return state
        }
    }