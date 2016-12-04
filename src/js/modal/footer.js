import React from 'react';
import style from '../../css/main.scss';
import Title from './Title';
import Close from './Close';
import Button from '../buttons/Button';
import ButtonSecondary from '../buttons/ButtonSecondary';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="xs-flex xs-flex-justify-start xs-px4 xs-pt3 xs-pb4 bs-t-solid bw1 border-gray20">
            <Button className="xs-mr2"> Submit </Button>
            <ButtonSecondary> Cancel </ButtonSecondary>
          </div>
        );
    }
}

export default Footer;
