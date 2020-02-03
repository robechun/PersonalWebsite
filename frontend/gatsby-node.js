const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
var s3 = require(`@auth0/s3`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allGhostPost {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create all the pages
  const posts = result.data.allGhostPost.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

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

}

//exports.onPostBuild = async (params) => {
  //var client = s3.createClient({
    //s3Options: {
      //accessKeyId: process.env.AWS_ACCESS_KEY,
      //secretAccessKey: process.env.AWS_SECRET_KEY,
      //region: 'us-west-2'
    //}
  //})

  //var params = {
    //localDir: "public",
    //deleteRemoved: true,
    //s3Params: {
      //Bucket: 'robertchung.me',
      //Prefix: ''
    //},
  //};

  //var uploader = client.uploadDir(params);
  //uploader.on('error', function(err) {
    //console.error("unable to sync:", err.stack);
  //});
  //uploader.on('progress', function() {
    //console.log("progress", uploader.progressAmount, uploader.progressTotal);
  //});
  //uploader.on('end', function() {
    //console.log("done uploading");
  //});
  
  //await(sleep(20000));
//}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
