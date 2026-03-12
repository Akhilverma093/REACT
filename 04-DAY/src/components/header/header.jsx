import React from 'react'
import styles from './header.module.css'
const header = () => {
  return (
    <div className={styles.head}>
      <h3>Sheryians</h3>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default header