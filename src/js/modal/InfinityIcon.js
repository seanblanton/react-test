import React from 'react';
import classNames from 'classnames'
import style from '../../css/main.scss';

const InfinityIcon = ({
  fillMain,
  fillAlt,
  strokeMain,
  strokeAlt,
  color,
  className,
  ...props
  }) => {

    return (
<svg {...props} width="18px" height="16px" viewBox="230 153 18 16" version="1.1">
    <g id="infinity-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(231.000000, 153.000000)">
        <rect id="Rectangle" x="0" y="0" width="16" height="16"></rect>
        <g id="Group-Copy" transform="translate(0.000000, 3.500000)">
            <g id="Page-1">
                <g id="Group-5" transform="translate(0.000000, 0.713553)" className={fillAlt}>
                    <path d="M8.23538824,3.87849412 C8.23538824,3.87849412 10.4302118,6.82343529 12.8198588,6.82343529 C14.4462118,6.82343529 15.7648,5.50484706 15.7648,3.87849412 C15.7648,2.25214118 14.4462118,0.933552941 12.8198588,0.933552941 C10.4302118,0.933552941 8.23538824,3.87849412 8.23538824,3.87849412" id="Fill-1"></path>
                    <path d="M8.2352,3.87849412 C8.2352,3.87849412 6.04037647,6.82343529 3.65072941,6.82343529 C2.02437647,6.82343529 0.705788235,5.50484706 0.705788235,3.87849412 C0.705788235,2.25214118 2.02437647,0.933552941 3.65072941,0.933552941 C6.04037647,0.933552941 8.2352,3.87849412 8.2352,3.87849412" id="Fill-3"></path>
                </g>
                <path d="M8.23538824,4.59204706 C8.23538824,4.59204706 10.4302118,7.53698824 12.8198588,7.53698824 C14.4462118,7.53698824 15.7648,6.2184 15.7648,4.59204706 C15.7648,2.96569412 14.4462118,1.64710588 12.8198588,1.64710588 C10.4302118,1.64710588 8.23538824,4.59204706 8.23538824,4.59204706 L8.23538824,4.59204706 Z" id="Stroke-6" className={strokeMain} stroke-width="1.5"></path>
                <path d="M8.2352,4.59204706 C8.2352,4.59204706 6.04037647,7.53698824 3.65072941,7.53698824 C2.02437647,7.53698824 0.705788235,6.2184 0.705788235,4.59204706 C0.705788235,2.96569412 2.02437647,1.64710588 3.65072941,1.64710588 C6.04037647,1.64710588 8.2352,4.59204706 8.2352,4.59204706 L8.2352,4.59204706 Z" id="Stroke-8" className={strokeMain} stroke-width="1.5"></path>
            </g>
        </g>
    </g>
</svg>
    )
}

export default InfinityIcon;