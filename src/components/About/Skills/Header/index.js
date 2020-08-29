import React from 'react'

import styles from './index.module.scss'

const Header = ({title, color}) => {
  const colorCapitalized = color.charAt(0).toUpperCase() + color.slice(1)
  const colorClass = styles[`header${colorCapitalized}`]
  return (
    <h3 className={`${styles.header} ${colorClass}`}>
      {title}
    </h3>
  )
}

export default Header