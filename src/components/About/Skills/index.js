import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './index.module.scss';
import Header from './Header';
import List from './List';

const Skills = () => {
	const data = useStaticQuery(graphql`
		query SkillsQuery {
			allSkillsYaml {
				edges {
					node {
						title
						color
						content {
							item
						}
					}
				}
			}
		}
	`);
	const { edges } = data.allSkillsYaml;
	return (
		<section id='skills' className={styles.skills}>
			<h2 className={styles.skills__title}>My skills</h2>
			{edges.map(({ node: { title, color, content } }, index) => {
				return (
					<section className={styles.skills__skillSet} key={index}>
						<Header title={title} color={color} />
						<List data={content} color={color} />
					</section>
				);
			})}
		</section>
	);
};

export default Skills;
