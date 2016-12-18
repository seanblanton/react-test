import React from 'react';
import classNames from 'classnames'
import style from '../../css/main.scss';


const Title = ({
  title,
  color = 'color-black70',
  ...props
  }) => {

    const cx = classNames(
      'xs-fs3',
      'xs-my0',
      'fw4',
      'lh-heading',
      color
    )

    return (
      <div {...props} className={cx}> { title ? title : props.children  } </div>
    )
}

export default Title;
