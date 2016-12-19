import React from 'react';
import classNames from 'classnames'
import style from '../../css/main.scss';
import Box from './Box';


const Clearfix = ({
  ...props
  }) => {

    return (
      <Box {...props} className="clearfix" />
    )
}

export default Clearfix;
