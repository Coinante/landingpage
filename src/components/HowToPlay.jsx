import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';
import Button2 from './Button2';
 

const HowToPlay = ({ title, description, description2, description3, description4, description5, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}>
      <div className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
        `}>
          <h1 className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}>{title}</h1>
          <div >
            <p className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}>{description5}</p>
          <p className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}>{description2} <a href='https://www.youtube.com/watch?v=7dzwXCZXdYo'> (Here) </a></p>
          <p className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}>{description3}  <a href="https://www.youtube.com/watch?v=8JZSUv40Tx0"> (Here) </a></p>
          <p className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}>{description}  <a href='https://www.youtube.com/watch?v=Af_lQ1zUnoM'> (Here) </a></p>
          
          <p className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}>{description4}  <a href="https://play.coinante.io"> (Here) </a></p>
          </div>
          <div className='flex justify-start space-x-14'>
          {showBtn && (
            <Button 
              assetUrl={assets.expo}
              link=""
            />
          )}

           {showBtn && (
            <Button2 
              assetUrl={assets.expo}
              link="https://mute-unit-6558.on.fleek.co"
            />
          )}
          </div>
        </div>
        <div
          className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}
        >
          <img src={mockupImg} alt="mockup" className={`
           ${reverse ? " fadeLeftMini" : " fadeRightMini" }
          ${styles.sectionImg}`}  />
        </div>
      </div>
    </div>
    
  )
}

export default HowToPlay