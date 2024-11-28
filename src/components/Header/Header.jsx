import React, { useState } from 'react';
import styles from './Header.module.css'
import { HREF_TELEPHONE_NUMBER, TELEPHONE_NUMBER } from '../../consts/consts';
import tgIco from '../../assets/telegramIcon.svg'
import viberIco from '../../assets/viber.svg'
import logo from '../../assets/logo.svg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <div className={styles.companyWrapper}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt='logo' />
          <h1 className={styles.h1}>GRUZOVOZIM.BY</h1>
        </div>
        <span className={styles.phoneNum}>{TELEPHONE_NUMBER}</span>
        <div className={styles.buttons}>
          <a target='_blank' rel='noreferrer' href={`https://t.me/${HREF_TELEPHONE_NUMBER}`}>
            <img className={styles.socials} src={tgIco} alt='telegram'/>
          </a>
          <a target='_blank' rel='noreferrer' href={`viber://chat?number=375445381585`}>
            <img className={styles.socials} src={viberIco} alt='viber'/>
          </a>
        </div>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.ul}>
          <li className={styles.li} onClick={() => {setMenuOpen(false)}}>
            <a href='#services' className={styles.a}>Услуги</a>
          </li>
          <li className={styles.li} onClick={() => {setMenuOpen(false)}}>
            <a href='#prices' className={styles.a}>Цены</a>
          </li>
          <li className={styles.li} onClick={() => {setMenuOpen(false)}}>
            <a href='#contacts' className={styles.a}>Контакты</a>
          </li>
        </ul>
      </nav>
      <button 
        className={`${styles.burgerBtn} ${menuOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
      </button>
    </header>
  );
};

export default Header;
