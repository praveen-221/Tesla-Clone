import React from 'react';
import Button from './button.js';
import './bg_itm.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Hidden } from '@mui/material';

function Item({
  title,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
}) {
  return (
    <>
      <div
        className='item'
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className='item_container'>
          <div className='item_text'>
            <p>{title}</p>
            <div className='item_textdesc'>
              <p>{desc}</p>
            </div>
          </div>
          <div className='item_lowerThird'>
            <div className='item_buttons'>
              <Button
                imp='primary'
                text={leftBtnTxt}
                link={leftBtnLink}
                t={twobuttons}
              />
              {twoButtons && (
                <Button
                  imp='secondary'
                  text={rightBtnTxt}
                  link={rightBtnLink}
                  t={twobuttons}
                />
              )}
            </div>
            {first && (
              <div className='item_expand'>
                <ExpandMoreIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
