import React from 'react';
import styles from './AboutUs.module.css'
import van from '../../../../assets/aboutUs1.png'
import team from '../../../../assets/aboutUs2.png'
import telIco from '../../../../assets/telIcoWithoutEclipse.svg'
import about1 from '../../../../assets/about1.svg'
import about2 from '../../../../assets/about2.svg'
import about3 from '../../../../assets/about3.svg'
import about4 from '../../../../assets/about4.svg'
import { ABOUT_DESCKTOP, ABOUT_MOBILE, HREF_TELEPHONE_NUMBER } from '../../../../consts/consts';

const AboutUs = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.header}>О НАС</h2>
      <div className={styles.text}>
        <p>{ABOUT_DESCKTOP.p1}</p>
        <p>{ABOUT_DESCKTOP.p2}</p>
        <p>{ABOUT_DESCKTOP.p3}</p>
      </div>
      <div className={styles.mobileText}>
        <ul>

          <li className={styles.listItem}>
            <div className={styles.liIcon}>
              <img src={about1} alt='' />
            </div>
            <p>{ABOUT_MOBILE.p1}</p>
          </li>

          <li className={styles.listItem}>
            <div className={styles.liIcon}>
              <img src={about2} alt='' />
            </div>
            <p>{ABOUT_MOBILE.p2}</p>
          </li>

          <li className={styles.listItem}>
            <div className={styles.liIcon}>
              <img src={about4} alt='' />
            </div>
            <p>{ABOUT_MOBILE.p4}</p>
          </li>

          <li className={styles.listItem}>
            <div className={styles.liIcon}>
              <img src={about3} alt='' />
            </div>
            <p>{ABOUT_MOBILE.p3}</p>
          </li>

        </ul>
      </div>
      <a href={`tel:${HREF_TELEPHONE_NUMBER}`} className={styles.contactButton}>
        <img className={styles.telIco} src={telIco} alt=''/>
        <span>Связаться с нами</span>
      </a>
      <div className={styles.imagesContainer}>
        <img src={team} className={`${styles.image} ${styles.mainImage}`} alt='team' />
        <img src={van} className={`${styles.image} ${styles.secondaryImage}`} alt='van' />
      </div>
    </section>
  );
};

export default AboutUs;
