const React = require("react")
const Layout = require("./src/components/layout/layout").default
const Boot = require("./src/components/boot").default

// custom typefaces
require("typeface-montserrat")
require("typeface-merriweather")

require('prismjs/themes/prism-okaidia.css')
require('./static/fonts.css')

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = Boot
