import React from 'react';
import classNames from 'classnames'
import style from '../../css/main.scss';


const Close = ({
  fill,
  color,
  className,
  ...props
  }) => {

    const cx = classNames(
      fill,
      color,
      className,
    )

    return (
      <svg {...props} className={cx} width="16px" height="16px" viewBox="552 27 16 16" version="1.1">
          <defs></defs>
          <g id="Close-Button" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(553.000000, 28.000000)">
              <path d="M8.70192941,7.76470588 L15.0708706,14.1336471 C15.2195765,14.2823529 15.2939294,14.4414118 15.2939294,14.6098824 C15.2939294,14.7783529 15.2271059,14.9298824 15.0925176,15.0635294 C14.9588706,15.1971765 14.7979294,15.264 14.6096941,15.264 C14.4205176,15.264 14.2624,15.2 14.1334588,15.0710588 L7.76451765,8.70211765 L1.39557647,15.0710588 C1.26663529,15.2 1.10851765,15.264 0.919341176,15.264 C0.731105882,15.264 0.570164706,15.1971765 0.436517647,15.0635294 C0.301929412,14.9298824 0.235105882,14.7783529 0.235105882,14.6098824 C0.235105882,14.4414118 0.309458824,14.2823529 0.458164706,14.1336471 L6.82710588,7.76470588 L0.458164706,1.39576471 C0.309458824,1.24705882 0.235105882,1.088 0.235105882,0.919529412 C0.235105882,0.751058824 0.307576471,0.594823529 0.450635294,0.450823529 C0.594635294,0.306823529 0.750870588,0.235294118 0.919341176,0.235294118 C1.08875294,0.235294118 1.24687059,0.309647059 1.39557647,0.458352941 L7.76451765,6.82729412 L14.1334588,0.458352941 C14.2821647,0.309647059 14.4402824,0.235294118 14.6096941,0.235294118 C14.7781647,0.235294118 14.9344,0.306823529 15.0784,0.450823529 C15.2214588,0.594823529 15.2939294,0.751058824 15.2939294,0.919529412 C15.2939294,1.088 15.2195765,1.24705882 15.0708706,1.39576471 L8.70192941,7.76470588 Z" id="Fill-1" fill="#D3D3D3"></path>
              <path d="M8.70192941,7.76470588 L15.0708706,14.1336471 C15.2195765,14.2823529 15.2939294,14.4414118 15.2939294,14.6098824 C15.2939294,14.7783529 15.2271059,14.9298824 15.0925176,15.0635294 C14.9588706,15.1971765 14.7979294,15.264 14.6096941,15.264 C14.4205176,15.264 14.2624,15.2 14.1334588,15.0710588 L7.76451765,8.70211765 L1.39557647,15.0710588 C1.26663529,15.2 1.10851765,15.264 0.919341176,15.264 C0.731105882,15.264 0.570164706,15.1971765 0.436517647,15.0635294 C0.301929412,14.9298824 0.235105882,14.7783529 0.235105882,14.6098824 C0.235105882,14.4414118 0.309458824,14.2823529 0.458164706,14.1336471 L6.82710588,7.76470588 L0.458164706,1.39576471 C0.309458824,1.24705882 0.235105882,1.088 0.235105882,0.919529412 C0.235105882,0.751058824 0.307576471,0.594823529 0.450635294,0.450823529 C0.594635294,0.306823529 0.750870588,0.235294118 0.919341176,0.235294118 C1.08875294,0.235294118 1.24687059,0.309647059 1.39557647,0.458352941 L7.76451765,6.82729412 L14.1334588,0.458352941 C14.2821647,0.309647059 14.4402824,0.235294118 14.6096941,0.235294118 C14.7781647,0.235294118 14.9344,0.306823529 15.0784,0.450823529 C15.2214588,0.594823529 15.2939294,0.751058824 15.2939294,0.919529412 C15.2939294,1.088 15.2195765,1.24705882 15.0708706,1.39576471 L8.70192941,7.76470588 L8.70192941,7.76470588 Z" id="Stroke-3" stroke="#D3D3D3" strokeWidth="0.5"></path>
          </g>
      </svg>
    )
}

export default Close;
