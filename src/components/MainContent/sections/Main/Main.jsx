import React from 'react';
import styles from './Main.module.css'
import { TELEPHONE_NUMBER } from '../../../../consts/consts';
import icon from '../../../../assets/telIcon.svg'

const Main = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.info}>
        <h2 className={styles.h2}>ПЕРЕВОЗКИ С ОПЫТНЫМИ И ОТВЕТСТВЕННЫМИ ГРУЗЧИКАМИ</h2>
        <p className={styles.p}>Наша компания предлагает профессиональные услуги по грузоперевозкам по Минску и Беларуси. Мы обеспечиваем надёжную доставку груза любой сложности и размера с высоким уровнем сервиса.</p>
        <div className={styles.telephone}>
          <a href={`tel:${TELEPHONE_NUMBER}`} className={styles.telHref}>
            <img src={icon} alt='telephone' className={styles.telButton} /> 
            <span>{TELEPHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
