import React, { Component } from 'react';

class Soda extends Component {
    render() {
        return(
            <div>
                <h1>Soda Component!</h1>
                <h3>This is the soda that is available: {this.props.name}</h3>
                <img src='https://images.unsplash.com/photo-1605548230624-8d2d0419c517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            </div>
        )
    }
}

export default Soda;
