import React, { Component } from 'react';

class Fruits extends Component {
    render() {
        return(
            <div>
                <h1>Fruits Component!</h1>
                <h3>This is the fruit that is available: {this.props.name}</h3>
                <img src='https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' />
            </div>
        )
    }
}

export default Fruits;