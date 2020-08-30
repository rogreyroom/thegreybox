import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './index.module.scss';
import Card from '../Card';

const Projects = ({ title, color }) => {
	const data = useStaticQuery(graphql`
		query ProjectsQuery {
			allProjectsYaml {
				edges {
					node {
						name
						type
						description
						url
						cloneUrl
						githubUrl
						languages {
							name
						}
					}
				}
			}
			icons: allFile(filter: { absolutePath: { regex: "/icons/" } }) {
				edges {
					node {
						publicURL
						name
					}
				}
			}
		}
	`);
	const { edges } = data.allProjectsYaml;
	const icons = data.icons.edges;

	return (
		<section className={styles.projects}>
			<h2 className={styles.projects__header}>My projects</h2>
			<p className={styles.projects__content}>
				I create practically every day constantly developing my skills and extending my knowledge. Here are some
				of my projects including those I am really proud of.
			</p>
			<div className={styles.projects__cards}>
				{edges.map(({ node }, index) => {
					return <Card data={node} icons={icons} key={index} />;
				})}
			</div>
		</section>
	);
};

export default Projects;
