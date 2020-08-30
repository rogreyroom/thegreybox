import React from 'react';

import styles from './index.module.scss';

const getIconUrl = (type, iconsArr) => {
	const icon = iconsArr.filter(({ node: { name } }) => name === type);
	return icon[0].node.publicURL;
};

// const handleTabPress = e => {
// 	if (e.keyCode === 9) {
// 		console.log('TAB');
// 	}
// };

const copyGithubCloneLink = url => {
	const listener = function(ev) {
		ev.preventDefault();
		ev.clipboardData.setData('text/plain', url);
	};
	document.addEventListener('copy', listener);
	document.execCommand('copy');
	document.removeEventListener('copy', listener);
};

const Card = ({ data, icons }) => {
	const { name, type, description, url, githubUrl, cloneUrl, languages } = data;

	return (
		<section className={styles.card}>
			<div className={styles.card__content}>
				<header className={styles.card__header}>
					<img src={getIconUrl(type, icons)} alt={`A ${type} icon`} className={styles.card__image} />

					<h3 className={styles.card__title}>{name}</h3>
				</header>
				<p className={styles.card__description}>{description}</p>
				<section className={styles.card__languages}>
					<ul className={styles.languages__list}>
						{languages.map((lang, lang_index) => {
							return (
								<li className={styles.languages__item} key={lang_index}>
									{lang.name}
								</li>
							);
						})}
					</ul>
				</section>
			</div>
			<footer className={styles.card__footer}>
				<ul className={styles.card__list}>
					{url !== '' && (
						<li className={`${styles.card__item} ${styles.card__itemWebsite}`}>
							<a
								href={url}
								role='button'
								tabIndex='0'
								// onKeyUp={handleTabPress}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.card__link}
							>
								<img
									src={getIconUrl('live', icons)}
									alt={`A live preview icon`}
									className={styles.card__image}
								/>
							</a>
							<span className={styles.card__tooltip}>Live</span>
						</li>
					)}
					{githubUrl !== '' && (
						<li className={`${styles.card__item} ${styles.card__itemGithub}`}>
							<a
								href={githubUrl}
								role='button'
								tabIndex='0'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.card__link}
							>
								<img
									src={getIconUrl('code', icons)}
									alt={`A github preview icon`}
									className={styles.card__image}
								/>
							</a>
							<span className={styles.card__tooltip}>GitHub</span>
						</li>
					)}
					{cloneUrl !== '' && (
						<li className={`${styles.card__item} ${styles.card__itemClone}`}>
							<button
								onClick={() => copyGithubCloneLink(cloneUrl)}
								tabIndex='0'
								className={styles.card__button}
							>
								<img
									src={getIconUrl('clone', icons)}
									alt={`A clone GitHub repo icon`}
									className={styles.card__image}
								/>
								<span className={styles.card__tooltip}>Clone</span>
							</button>
						</li>
					)}
				</ul>
			</footer>
		</section>
	);
};

export default Card;
