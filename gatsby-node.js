const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve("src/templates/thought-form.js");

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/thought-forms/" } }
      ) {
        nodes {
          frontmatter {
            release
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach(node => {
    const number = String(node.frontmatter.release).padStart(3, "0"); // 1 -> 001
    const slug = `/releases/ATF${number}`;

    createPage({
      path: slug,
      component: template,
      context: { release: node.frontmatter.release },
    });
  });
};
