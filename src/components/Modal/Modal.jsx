import React from 'react';
import styles from './Modal.module.css'

const Modal = ({plan, handleModalToggle}) => {
  return (
    <div className={styles.modalOverlay} onClick={handleModalToggle}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className={styles.modalTitle}>{plan.title}</h2>
        {!plan.description ? 'Подробное описание отсутствует.' : plan.description.split('\n').map((line, index) => (
          <p className={styles.modalDescription} key={index}>{line}</p>
        ))}
        <button className={styles.closeButton} onClick={handleModalToggle}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
