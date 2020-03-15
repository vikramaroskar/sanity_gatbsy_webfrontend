/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const results = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  console.log(Object.keys(results));
  const projects = results.data.allSanityProject.edges.map(({node}) => node);

  projects.forEach(project => {
      actions.createPage({
        path: project.slug.current,
        component: path.resolve('./src/templates/project.js'),//???
        context: {
            slug: project.slug.current
        }
      });

  });

}
