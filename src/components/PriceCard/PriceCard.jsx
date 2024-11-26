import React, { useState } from 'react';
import styles from './PriceCard.module.css'
import Modal from 'components/Modal/Modal';

const PriceCard = ({plan}) => {
  const [isModalOpen, setIsModalOpen] = useState()

  const handleModalToggle = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <>
      <div className={styles.pricingCard}>
        <img 
          className={styles.image} 
          src={plan.img} alt='pricePlan' 
          />

        <div className={styles.info}>
          <h3 className={styles.title}>{plan.title}</h3>
          <div>
            <p className={styles.price}>{plan.price1}</p>
            <p className={styles.price}>{plan.price2}</p>
          </div>

          <button 
            className={styles.orderButton} 
            onClick={() => {handleModalToggle()}}
            > 
            Подробнее
          </button>
        </div>
      </div>          
      {isModalOpen && <Modal plan={plan} handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default PriceCard;
