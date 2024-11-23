import React from 'react';
import styles from './Footer.module.css'
import tgIco from 'assets/telegramIcon.svg'
import viberIco from 'assets/viber.svg'
import logo from 'assets/logo.svg'
import { TELEPHONE_NUMBER } from 'consts/consts';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt='logo' />
        <h2 className={styles.h2}>GRUZOPEREVOZKA</h2>
      </div>

      <span className={styles.contacts}>{TELEPHONE_NUMBER}</span>

      <div className={styles.buttons}>
        <a target='_blank' rel='noreferrer' href='https://t.me/+375333747776'>
          <img className={styles.icons} src={tgIco} alt='telegram'/>
        </a>
        <a target='_blank' rel='noreferrer' href={`viber://chat?number=375333747776`}>
          <img className={styles.icons} src={viberIco} alt='viber'/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
