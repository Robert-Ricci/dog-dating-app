const BASE_URL = "http://localhost:3090/pets/"

export const addPet = pet => {
    return dispatch => {
        fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(pet)
        })
        .then(resp => resp.json())
        .then(pet => console.log("new pet added!", pet))
    }
}