import React, { Component } from 'react';

class SignUp extends Component {
    
    
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
                    <label>Name:</label><br />
                    <input type='text' value={this.state.name} onChange={event => this.handleChange(event)} name='name' />
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

export default SignUp;