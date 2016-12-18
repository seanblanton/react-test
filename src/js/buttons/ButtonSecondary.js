import React from 'react';
import style from '../../css/main.scss';
import Button from './Button';


const ButtonSecondary =  (props)  => {

    return (
      <Button
        {...props}
        backgroundColor="bg-gray20"
        color="color-gray"
        border="border-gray30">
          { props.children }
      </Button>
    )
}

export default ButtonSecondary;
