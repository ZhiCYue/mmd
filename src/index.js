import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { registe } from './event';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'hello world.'
        }
    }

    componentDidMount() {
        registe(this);
        this.on('myEvent', (args) => {
            this.setState({
                message: 'event is emited.'
            })
        });

        setTimeout(() => {
            this.emit('myEvent', 'world');
        }, 3000);
    }

    render() {
        return <div>{this.state.message}</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
