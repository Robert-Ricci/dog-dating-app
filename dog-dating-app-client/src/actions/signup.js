export const addUser = (user) =>{
    return dispatch =>{
        fetch('http://localhost:3000/users', {
            method:'POST',
            body: JSON.stringify(user),
            headers:{'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(user => console.log("new user", user)
            
            // {dispatch({type: 'ADD_USER', payload:user})}
            
            
            )
        
    }
}

