import React from 'react';
import classNames from 'classnames'
import style from '../../css/main.scss';


const Box= ({
  title,
  px = "xs-px4",
  py,
  pt = "xs-pt4",
  pb = "xs-pb3",
  pa,
  ...props
  }) => {

    const cx = classNames(
      'xs-flex',
      'xs-flex-justify-between',
      'bs-b-solid',
      'bw1',
      'border-gray20',
      px,
      py,
      pt,
      pb,
      pa,
    )

    return (
      <div {...props} className={cx}> {props.children} </div>
    )
}

export default Box;
