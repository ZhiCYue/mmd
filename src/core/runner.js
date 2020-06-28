import React, { Component } from 'react';
import cb from './cube';

import { isArray } from '../util';

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
        const { viewmeta } = this.state;
        if (isArray(viewmeta.containers)) {
            viewmeta.containers.foreach(container => {
                
            })
        }
        return <div>container.</div>
    }

    render() {
        if (!this.state.viewmeta) return '解析中...';
        return <div>
            { this.parseContainers() }
        </div>
    }
}

export default MetaRunner;
