module.exports = {
	siteMetadata: {
		title: `Robert Adamczewski portfolio`,
		author: {
			name: `Robert Adamczewski`,
			summary: `who lives and works in Racibórz building useful things.`
		},
		description: `Robert Adamczewski frontend developer homepage. This is the place where I share some information about me and my frontend skills.`,
		siteUrl: `https://adamczewski.me/`,
		image: `content/assets/cover.png`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				//trackingId: `ADD YOUR TRACKING ID HERE`,
			}
		},
		// `gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Robert Adamczewski portfolio`,
				short_name: `Robert Adamczewski`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#D9E6FC`,
				display: `minimal-ui`,
				icon: `content/assets/icon-512x512.png`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-sass`,
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/skills`,
				name: `skills`,
				typeName: `Yaml`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/projects`,
				name: `projects`,
				typeName: `Yaml`
			}
		}
	]
};
