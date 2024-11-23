import React from 'react';
import styles from './Header.module.css'
import { TELEPHONE_NUMBER } from 'consts/consts';
import tgIco from 'assets/telegramIcon.svg'
import viberIco from 'assets/viber.svg'
import logo from 'assets/logo.svg'

const Header = () => {
  return (
    <header>
      <div className={styles.companyWrapper}>
        <div className={styles.logoContainer}>
          <img src={logo} alt='logo' />
          <h1 className={styles.h1}>GRUZOPEREVOZKA</h1>
        </div>
        <div className={styles.vertical} />
        <span>{TELEPHONE_NUMBER}</span>
        <div className={styles.buttons}>
          <a target='_blank' rel='noreferrer' href={`https://t.me/${TELEPHONE_NUMBER}`}>
            <img src={tgIco} alt='telegram'/>
          </a>
          <a target='_blank' rel='noreferrer' href={`viber://chat?number=${TELEPHONE_NUMBER}`}>
            <img src={viberIco} alt='viber'/>
          </a>
        </div>
      </div>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href='#services' className={styles.a}>Услуги</a>
          </li>
          <li className={styles.li}>
            <a href='#prices' className={styles.a}>Цены</a>
          </li>
          <li className={styles.li}>
            <a href='#contacts' className={styles.a}>Контакты</a>
          </li>
        </ul>
      </nav>
      <button className={styles.burgerBtn}></button>
    </header>
  );
};

export default Header;
