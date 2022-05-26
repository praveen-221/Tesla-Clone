import React from 'react';
import './button.css';

function Button({imp,text,link,t}) {
  // if (t == 'fasle') {
  //   if (imp == 'secondary') {
  //     {{display: none}}
  //   }
  // }
  return <div className={`button ${imp == 'secondary' ? 'button_white' : ''}`}>
      <a href={link}>
          {text}
      </a>
  </div>;
}

export default Button;
