import React from 'react';
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.header}>О КОМПАНИИ</h2>
      <div className={styles.text}>
        <ul className={styles.ul}>
          <li>Опытная команда: мы занимаемся грузоперевозками уже более 10 лет;</li>
          <li>Широкий парк транспорта: от газелей до фур и спецтехники;</li>
          <li>Доступные цены: мы предлагаем лучшие цены в регионе без потери качества услуг;</li>
          <li>Фокус на безопасность: мы заботимся о сохранности вашего груза на всех этапах доставки.</li>
        </ul>
      </div>
      
    </section>
  );
};

export default AboutUs;
