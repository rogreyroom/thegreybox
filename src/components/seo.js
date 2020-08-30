/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, title }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
						image
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const url = site.siteMetadata.siteUrl;
	const image = site.siteMetadata.image;

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			// url={`%s | ${site.siteMetadata.siteUrl}`}
			// image={`%s | ${site.siteMetadata.image}`}
			meta={[
				{
					name: `description`,
					content: metaDescription
				},
				{
					property: `og:title`,
					content: title
				},
				{
					property: `og:description`,
					content: metaDescription
				},
				{
					property: `og:type`,
					content: `website`
				},
				{
					property: `og:url`,
					content: url
				},
				{
					property: `og:image`,
					content: image
				}
			].concat(meta)}
		/>
	);
};

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired
};

export default SEO;
