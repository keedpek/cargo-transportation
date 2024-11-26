import React from 'react';
import styles from './Footer.module.css'
import tgIco from 'assets/telegramIcon.svg'
import viberIco from 'assets/viber.svg'
import logo from 'assets/logo.svg'
import { FOOTER_TEXT, HREF_TELEPHONE_NUMBER, TELEPHONE_NUMBER } from 'consts/consts';

const Footer = () => {
  return (
    <footer className={styles.footer}>
    
      <div className={styles.companyInfo}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt='logo' />
          <span className={styles.title}>GRUZOPEREVOZKA</span>
        </div>
        <h3 className={styles.h3}>{FOOTER_TEXT}</h3>
      </div>

      <div className={styles.footerSection}>
        <h2 id='contacts'>Контакты :</h2>
        <div className={styles.contacts}>
          <a href={`tel:${HREF_TELEPHONE_NUMBER}`} className={styles.phone}>{TELEPHONE_NUMBER}</a>
          <div className={styles.buttons}>
            <a target='_blank' rel='noreferrer' href={`https://t.me/${HREF_TELEPHONE_NUMBER}`}>
              <img className={styles.icons} src={tgIco} alt='telegram'/>
            </a>
            <a target='_blank' rel='noreferrer' href={`viber://chat?number=375333747776`}>
              <img className={styles.icons} src={viberIco} alt='viber'/>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <h2>Меню :</h2>
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
      </div>

    </footer>
  );
};

export default Footer;
