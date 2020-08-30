import React from 'react';

import styles from './index.module.scss';

const Question = () => {
	return (
		<section className={styles.question}>
			<h2 className={styles.question__header}>
				<span className={styles.question__span}>What makes me different? </span>
				Persistence in searching for solutions and practical ways of creating user-friendly websites.
			</h2>
		</section>
	);
};

export default Question;
