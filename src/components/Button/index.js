import React from 'react';
import { Link } from 'gatsby';

import styles from './index.module.scss';

const Button = ({ to, text, variant }) => {
	const modClass =
		variant === 'text'
			? `${styles.button} ${styles.buttonLink}`
			: variant === 'button' ? `${styles.button} ${styles.buttonButton}` : '';

	return (
		<Link to={to}>
			<button className={modClass}>{text}</button>
		</Link>
	);
};

export default Button;
