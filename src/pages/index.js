import React from 'react';
// import { graphql } from 'gatsby';

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"
// import 'normalize.css'

import styles from '../styles/pages/index.module.scss';

import Button from '../components/Button';
import Face from '../components/About/Face';
import Header from '../components/About/Header';
import Question from '../components/About/Question';
import Skills from '../components/About/Skills';
import Projects from '../components/About/Projects';
import Footer from '../components/Footer'

const AboutIndex = ({ data, location }) => {
	// const siteTitle = data.site.siteMetadata.title
	// const posts = data.allMarkdownRemark.edges

	// console.log(styles);

	return (
		<>
		<main>
			<header className={styles.spacer}>
				<Face />
				<Header />
			</header>
			<Question />
			<section className={`${styles.spacer} ${styles.information}`}>
				<p className={styles.information__body}>
					Check <Button to='#skills' text='my skills' variant='text' /> section for the detailed list on my
					capabilities in the field. If you look for my sample creations, go straight to{' '}
					<Button to='#projects' text='my projects' variant='text' />. And if I can help you with your current
					project, feel free to <Button to='#contact' text='contact me' variant='text' />.
				</p>
				<a className={`${styles.spacer} ${styles.information__link}`} href='mailto:robert@adamczewski.me'>
					robert@adamczewski.me
				</a>
			</section>
			<Skills />
			<Projects />
		</main>
		<Footer />
		</>
		// <Layout location={location} title={siteTitle}>
		//   <SEO title="All posts" />
		//   <Bio />
		//   {posts.map(({ node }) => {
		//     const title = node.frontmatter.title || node.fields.slug
		//     return (
		//       <article key={node.fields.slug}>
		//         <header>
		//           <h3
		//             style={{
		//               marginBottom: rhythm(1 / 4),
		//             }}
		//           >
		//             <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
		//               {title}
		//             </Link>
		//           </h3>
		//           <small>{node.frontmatter.date}</small>
		//         </header>
		//         <section>
		//           <p
		//             dangerouslySetInnerHTML={{
		//               __html: node.frontmatter.description || node.excerpt,
		//             }}
		//           />
		//         </section>
		//       </article>
		//     )
		//   })}
		// </Layout>
	);
};

export default AboutIndex;

// export const pageQuery = graphql`
// 	query {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
// 			edges {
// 				node {
// 					excerpt
// 					fields {
// 						slug
// 					}
// 					frontmatter {
// 						date(formatString: "MMMM DD, YYYY")
// 						title
// 						description
// 					}
// 				}
// 			}
// 		}
// 	}
// `;
