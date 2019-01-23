const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Zoff",
    description:
      "Zoff Kollektiv ist ein Büro für visuelle Kommunikation aus Berlin",
    email: "kontakt@zoff-kollektiv.net"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images-projects",
        path: path.join(__dirname, "static", "images", "projects"),
      },
    },

    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-jsx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ]
};
