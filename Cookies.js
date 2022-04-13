import React, { Component } from 'react';

class Cookies extends Component {
    render() {
        return (
            <div>
                <h1>Cookies Component!!</h1>
                <h3>This is the cookie that is available: {this.props.name}</h3>
                <img src='https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=594&q=80' />
            </div>
        )
    }
}

export default Cookies;