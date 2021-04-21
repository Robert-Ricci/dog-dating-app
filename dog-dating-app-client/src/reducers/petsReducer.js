export const petsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PET':
            return [...state, action.pet]
        default: 
            return state
        }
    }