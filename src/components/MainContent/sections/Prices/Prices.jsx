import React from 'react';
import styles from './Prices.module.css'
import { MAIN_PRICES, ADD_PRICES } from '../../../../consts/consts';
import PriceCard from '../../../../components/PriceCard/PriceCard';

const Prices = () => {
  return (
    <section id='prices' className={styles.wrapper}>
      <h2 className={styles.header}>ЦЕНЫ</h2>
      <h3 className={styles.header3}>Основные услуги</h3>
      <div className={styles.pricingContainer}>
        {MAIN_PRICES.map((plan, index) => (
          <PriceCard plan={plan} key={index}/>
        ))}
      </div>
      <h3 className={styles.header3}>Дополнительные услуги</h3>
      <div className={styles.pricingContainer}>
        {ADD_PRICES.map((plan, index) => (
          <PriceCard plan={plan} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default Prices;
