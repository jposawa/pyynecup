import React from "react";

import styles from "./Modal.module.scss";

export const Modal = (props) => {
  const {showModal} = props;
  
  return (
    <div className={showModal ? styles.modal : `${styles.modal} hidden`}>
      <span className={styles.background} />

      <div className={styles.content}></div>
    </div>
  )
}