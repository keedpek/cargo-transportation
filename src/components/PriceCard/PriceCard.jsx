import React from 'react';
import styles from './PriceCard.module.css'

const PriceCard = ({plan}) => {
  return (
    <div className={styles.pricingCard}>
      <img className={styles.image} src={plan.img} alt='pricePlan' />
      <div className={styles.info}>
        <h3 className={styles.title}>{plan.title}</h3>
        <div>
          <p className={styles.price}>{plan.price1}</p>
          <p className={styles.price}>{plan.price2}</p>
        </div>
        <button className={styles.orderButton}>Описание</button>
      </div>
    </div>          
  );
};

export default PriceCard;
