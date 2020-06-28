import React, { Component } from 'react';
import cb from './cube';

class MetaRunner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        cb.runCommandLine({}, (vm, viewmeta) => {
            this.setState({
                vm,
                viewmeta
            })
        })
    }

    parseContainers() {
        return <div>container.</div>
    }

    render() {
        if (!this.state.viewmeta) return '解析中...';
        return <div>
            { this.parseContainers(this.state.viewmeta) }
        </div>
    }
}

export default MetaRunner;
