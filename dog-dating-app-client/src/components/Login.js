import React, { Component } from 'react';

class Login extends Component {
    
    state={
        name:'',
        email:'', 
        password:''
        
    }
    
    
    
    
    render() {
        return (
            <div>
                <form className="login">
                    <br />
                   
                    <br />
                    <label>Email:</label><br />
                    <input type='email' value={this.state.email} onChange={event => this.handleChange(event)} name='email' />
                    <br />
                    <br />
                    <label>Password:</label><br />
                    <input type='password' value={this.state.name} onChange={event => this.handleChange(event)} name='password' />
                    <br />

                </form>
            </div>
        );
    }
}

export default Login;