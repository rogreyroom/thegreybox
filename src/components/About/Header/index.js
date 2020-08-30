import React from 'react'

import styles from './index.module.scss'

const Header = () => {
  return (
    <h1 className={styles.header}>
      Hi there! <span className={styles.header__span} role="img" aria-label="Hello waving hand.">👋</span>
      My name is Robert and I am an avid frontend developer.
    </h1>
  )
}

export default Header