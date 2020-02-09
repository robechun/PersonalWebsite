const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
var s3 = require(`@auth0/s3`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogResults = await graphql(`
    {
      allGhostPost(
        filter: {tags: {elemMatch: {name: {eq: "blog"}}}}
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
  )

  const booksResult = await graphql(`
    {
      allGhostPost(
        filter: {tags: {elemMatch: {name: {eq: "books"}}}}
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
  )

  if (blogResults.errors) {
    throw blogResults.errors
  }
  if (booksResult.errors) {
    throw booksResult.errors
  }

  // Create all the pages
  const blogPosts = blogResults.data.allGhostPost.edges
  const bookPosts = booksResult.data.allGhostPost.edges

  blogPosts.forEach((post, index) => {
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })

  bookPosts.forEach((post, index) => {
    const previous = index === bookPosts.length - 1 ? null : bookPosts[index + 1].node
    const next = index === 0 ? null : bookPosts[index - 1].node

    createPage({
      path: 'bookshelf/' + post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })

}
