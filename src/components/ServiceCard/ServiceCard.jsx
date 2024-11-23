import React from 'react';
import styles from './ServiceCard.module.css'

const ServiceCard = ({img, title, description}) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.image} />
      <div className={styles.serviceInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
