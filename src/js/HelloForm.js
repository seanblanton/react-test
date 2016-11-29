import HelloSayer from './HelloSayer';
import React from 'react';
import style from '../css/main.scss';

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'world'};
    }

    render() {
        return (<div className="hello-form">
            <div className="ib v-middle xs-px3 xs-py2 xs-mx2 xs-my2 xs-fs2 bw3 color-white lh-button bg-blue bs-solid border-blue"> Submit </div>
            <input className="block" type="text" onChange={this.onChange.bind(this)} />
            <HelloSayer name={this.state.name} />
        </div>);
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        });
    }
}

export default HelloForm;