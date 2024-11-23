import React from 'react';
import styles from './AboutUs.module.css'
import van from 'assets/aboutUs1.png'
import team from 'assets/aboutUs2.png'
import telIco from 'assets/telIcoWithoutEclipse.svg'

const AboutUs = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.header}>О НАС</h2>
      <div className={styles.text}>
        <p>
        Наша компания — это профессиональный подход к грузоперевозкам, надёжность и высокий уровень сервиса. Мы успешно работаем на рынке уже более 10 лет, обеспечивая качественную и своевременную доставку грузов любой сложности по Минску, области и всей Республике Беларусь.
        </p>
        <p>
          Мы гордимся тем, что наши клиенты доверяют нам не только перевозку вещей, но и свой покой. Благодаря слаженной работе команды и широкому автопарку, мы предлагаем решения для самых разных задач — от небольших квартирных переездов до масштабных грузоперевозок по стране.
        </p>
        <p>
          Доверьте свой груз профессионалам — мы заботимся о том, чтобы каждая доставка оставляла только положительные эмоции!
        </p>
      </div>
      <a href="#contacts" class={styles.contactButton}>
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
