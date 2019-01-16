module.exports = {
  siteMetadata: {
    title: "Zoff",
    description:
      "Zoff Kollektiv ist ein Büro für visuelle Kommunikation aus Berlin",
    email: "kontakt@zoff-kollektiv.net"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-jsx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "principles",
        path: `${__dirname}/src/principles/`
      }
    },
    "gatsby-transformer-remark"
  ]
};
