import React from 'react';
import styles from './Footer.module.css'
import { TELEPHONE_NUMBER } from 'consts/consts';
import tgIco from 'assets/telegramIcon.svg'
import viberIco from 'assets/viber.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <img src='https://avatars.mds.yandex.net/i?id=684fd9f82216e86d706a71abdf4ed552aa8c0fdf-9747317-images-thumbs&n=13' alt='logo' className={styles.logo} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={styles.sectionWrapper}>
        <h3 className={styles.h3}>Контакты</h3>
        <div className={styles.contacts}>
          <p>{TELEPHONE_NUMBER}</p>
          <p>GRUZOPEREVOZKI@gmail.com</p>
          <a target='_blank' rel='noreferrer' href='https://t.me/+375333747776'>
            <img src={tgIco} alt='telegram'/>
          </a>
          <a target='_blank' rel='noreferrer' href={`viber://chat?number=375333747776`}>
            <img src={viberIco} alt='viber'/>
          </a>
        </div>
      </div>
      <div className={styles.sectionWrapper}>
        <h3 className={styles.h3}>Ещё чёт</h3>
      </div>
    </footer>
  );
};

export default Footer;
