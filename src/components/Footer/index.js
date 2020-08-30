import React from 'react';

import styles from './index.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<section className={styles.contact}>
				<h2 className={styles.contact__title}>Contact Me</h2>
				<p className={styles.contact__description}>
					I’m open for new opportunities. If you have one for me we should talk!
				</p>
				<ul className={styles.contact__socialList}>
					<li className={styles.contact__socialItem}>
						<a
							href='https://github.com/rogreyroom/'
							className={styles.contact__socialLink}
							role='button'
							tabIndex='0'
							target='_blank'
							rel='noopener noreferrer'
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M11.9891 0.328513C5.36571 0.326228 0 5.68851 0 12.3074C0 17.5417 3.356 21.9902 8.03029 23.6239C8.66 23.7822 8.56343 23.3348 8.56343 23.0297V20.9537C4.92857 21.3794 4.78114 18.9742 4.53771 18.5725C4.04457 17.7314 2.87943 17.5171 3.22743 17.1154C4.05543 16.6891 4.89886 17.2222 5.87657 18.6662C6.584 19.7137 7.96343 19.5365 8.66229 19.3628C8.81229 18.7431 9.13462 18.1785 9.592 17.7342C5.82628 17.0588 4.256 14.7605 4.256 12.0285C4.256 10.7028 4.69257 9.48394 5.54971 8.50109C5.00343 6.88051 5.60114 5.49308 5.68114 5.2868C7.23771 5.14737 8.85543 6.40108 8.98114 6.49994C9.86514 6.26166 10.8749 6.13594 12.0051 6.13594C13.1411 6.13594 14.1537 6.26737 15.0451 6.50794C15.348 6.27766 16.848 5.20109 18.2949 5.33194C18.3726 5.53823 18.956 6.89366 18.4417 8.49308C19.3103 9.4788 19.752 10.7079 19.752 12.0365C19.752 14.7737 18.1714 17.0748 14.3949 17.7394C14.7183 18.0576 14.9752 18.437 15.1504 18.8556C15.3256 19.2741 15.4157 19.7233 15.4154 20.1771V23.1902C15.4366 23.4314 15.4154 23.6702 15.8171 23.6702C20.5606 22.0702 23.976 17.5891 23.976 12.3102C23.976 5.68794 18.608 0.327942 11.9886 0.327942L11.9891 0.328513Z'
									fill='#f6f6f9'
								/>
							</svg>
						</a>
					</li>
				</ul>
				<a href='mailto:robert@adamczewski.me' className={styles.contact__link}>
					robert@adamczewski.me
				</a>
			</section>
		</footer>
	);
};

export default Footer;
