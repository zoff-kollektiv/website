module.exports = {
  siteMetadata: {
    title: 'Zoff',
    description: 'Zoff collective',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-styled-jsx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'principles',
        path: `${__dirname}/src/principles/`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
