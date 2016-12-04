import React from 'react';
import style from '../../css/main.scss';

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className={"xs-pa4" + " " + this.props.className } >
            { this.props.children }
          </div>
        );
    }
}

export default Body;
