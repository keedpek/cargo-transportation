import React from 'react';
import styles from './Services.module.css'
import { SERVICES } from 'consts/consts';
import ServiceCard from 'components/ServiceCard/ServiceCard';

const Services = () => {
  return (
    <section id='services' className={styles.wrapper}>
      <h2 className={styles.header}>ПРЕДОСТАВЛЯЕМЫЕ УСЛУГИ</h2>
      <div className={styles.cardsContainer}>
        {SERVICES.map((service, index) => 
          <ServiceCard title={service.title} description={service.description} img={service.img} key={index}/>
        )}
      </div>
    </section>
  );
};

export default Services;
