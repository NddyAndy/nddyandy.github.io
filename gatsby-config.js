/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Ndifreke Friday`,
    titleTemplate: "%s · Software Developer",
    description: `Hi. I'm Ndie a Software Developer based out of Port Harcourt, Nigeria.`,
    author: `@ndiecodes`,
    url: "https://ndiecodes.github.io", // No trailing slash allowed!
    image: "/images/ndie.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ndiecodes",
    keywords: ['ndiecodes', 'portfolio', 'software developer', 'developer', 'web developer']
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ]
}
