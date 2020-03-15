const React = require("react")
const Layout = require("./src/components/layout/layout").default
const Boot = require("./src/components/boot").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = Boot
