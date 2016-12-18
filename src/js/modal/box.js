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
  height,
  ...props
  }) => {

    const cx = classNames(
      flex,
      flexRow,
      flexWrap,
      flexJustify,
      'xs-pt4',
      'xs-px4',
      'xs-pb0',
      backgroundColor,
      color,
    )

    const sx = {
      width,
      height,
    }


    return (
      <div {...props} style={sx} className={cx}> {props.children} </div>
    )
}

export default Box;
