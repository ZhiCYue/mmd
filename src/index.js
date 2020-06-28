import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MetaRunner from './core/runner';

class App extends Component {
    render() {
        return <div>
            <MetaRunner />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
