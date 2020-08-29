import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from './index.module.scss';

const Face = () => {
	const data = useStaticQuery(graphql`
		query FaceQuery {
			avatar: file(absolutePath: { regex: "/face.jpg/" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Link to='/'>
			<div className={styles.face}>
				<Image
					fluid={data.avatar.childImageSharp.fluid}
					alt='Robert Adamczewski photo'
					className={styles.face__image}
				/>
			</div>
		</Link>
	);
};

export default Face;
