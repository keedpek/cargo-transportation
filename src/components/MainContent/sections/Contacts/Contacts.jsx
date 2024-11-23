import React from 'react';
import styles from './Contacts.module.css'
import { EMAIL, TELEPHONE_NUMBER } from 'consts/consts';
import telIco from 'assets/telephone.svg'
import emailIco from 'assets/email.svg'
import mapIco from 'assets/map.svg'


const Contacts = () => {
  return (
    <section id='contacts' className={styles.wrapper}>
      <h2 className={styles.header}>КОНТАКТЫ</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <img className={styles.img} src={mapIco} alt='map' />
          <p>Минск, Беларусь</p>
        </li>
        <li className={styles.listItem}>
          <img className={styles.img} src={emailIco} alt='mail' />
          <p>{EMAIL}</p>
        </li>
        <li className={styles.listItem}>
          <img className={styles.img} src={telIco} alt='tel' />
          <p>{TELEPHONE_NUMBER}</p>
        </li>
      </ul>
      <a href={`tel:${TELEPHONE_NUMBER}`}> <button className={styles.callBtn}>Позвони!</button> </a>
    </section>
  );
};

export default Contacts;
