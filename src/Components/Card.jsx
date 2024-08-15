import React from 'react'
import styles from '../Styles/Card.module.css'

const Card = ({ customer }) => {
  if(customer){
    return (
      <div className={styles.card}>
        <h2>Información Ingresada</h2>
        <p><strong>Nombre:</strong> {customer.name}</p>
        <p><strong>Canción favorita:</strong> {customer.favoriteSong}</p>
      </div>
    );
  }
};

export default Card