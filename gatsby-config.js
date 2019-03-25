const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Zoff Kollektiv",
    description: "Zoff ist ein Kollektiv für visuelle Kommunikation in Berlin.",
    email: "kontakt@zoff-kollektiv.net"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images-projects",
        path: path.join(__dirname, "static", "images", "projects")
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images-header",
        path: path.join(__dirname, "static", "images", "header")
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images-persons",
        path: path.join(__dirname, "static", "images", "persons")
      }
    },

    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-jsx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};
