import React from 'react';
import classNames from 'classnames'
import style from '../../css/main.scss';


const Button = ({
  paddingX = 'xs-px4',
  paddingY = 'xs-py2',
  fontSize = 'xs-fs5',
  color = 'color-white',
  backgroundColor = 'bg-orange',
  border = 'border-orange',
  label,
  mr,
  ml,
  ...props
  }) => {

    const cx = classNames(
      'xs-ib',
      'v-middle',
      'lh-button',
      'xs-my0',
      'fw4',
      'bs-solid',
      'br2',
      'bw1',
      paddingX,
      paddingY,
      fontSize,
      color,
      backgroundColor,
      border,
      mr,
      ml,
    )

    return (
      <div {...props} className={cx}>
        { props.children  }
      </div>
    )
}

export default Button;
