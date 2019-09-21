/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Yelp",
        fieldName: "yelp",
        url: "https://api.yelp.com/v3/graphql",
        headers: {
          Authorization: `Bearer khsmYstA7lDUHVBC8wPWqJyN-XXs5lZhD8YBPXT4eInwcCPeiBCsh8IkaqW_GFE7K6ccZxHO6yK7VupA-pIrz_ryqincPy3OnORR8MiPTFQNfFiqmfJ6Nmt5x8mCXXYx`,
        }
      },
    },
    `gatsby-plugin-less`,
    `gatsby-transformer-remark`,
  ]
}
