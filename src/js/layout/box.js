import React from 'react';
import classNames from 'classnames'
import style from '../../css/main.scss';


const Box = ({
  flex,
  flexRow,
  flexWrap,
  flexJustify,
  backgroundColor,
  color,
  width,
  height = 'auto',
  className,
  p,
  m,
  display,
  ...props
  }) => {

    const cx = classNames(
      flex,
      flexRow,
      flexWrap,
      flexJustify,
      backgroundColor,
      color,
      p,
      m,
      width,
      height,
      display,
      className,
      'tac',
    )


    return (
      <div {...props} className={cx}> {props.children} </div>
    )
}

export default Box;
