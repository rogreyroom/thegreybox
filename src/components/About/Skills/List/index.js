import React from 'react'

import styles from './index.module.scss'

const List = ({data, color}) => {
  const colorCapitalized = color.charAt(0).toUpperCase() + color.slice(1)
  const colorClass = styles[`list__icon${colorCapitalized}`]
  return (
    <ul className={styles.list}>
      {
        data.map(({item}, index) => {
          return (
            <li className={styles.list__item} key={index}>
              <svg className={`${styles.list__icon} ${colorClass}`} width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M225.882 331.294C217.901 331.264 210.266 328.071 204.649 322.409L159.473 277.233C147.712 265.472 147.712 246.377 159.473 234.617C171.234 222.857 190.329 222.856 202.089 234.617L227.538 260.066L311.717 187.934C325.526 178.658 344.244 182.347 353.505 196.156C361.2 207.631 360.116 222.855 350.87 233.11L245.458 323.463C240.083 328.343 233.141 331.128 225.882 331.294Z" fill="#1E90FF"/>
                <path d="M256 512C114.613 512 0 397.387 0 256C0 114.613 114.613 0 256 0C397.387 0 512 114.613 512 256C512 397.387 397.387 512 256 512ZM256 60.235C147.878 60.235 60.235 147.878 60.235 256C60.235 364.122 147.878 451.765 256 451.765C364.122 451.765 451.765 364.122 451.765 256C451.765 147.878 364.122 60.235 256 60.235Z" fill="#166CBF"/>
              </svg>
              {item}
            </li>
          )
        })
      }
    </ul>
  )
}

export default List