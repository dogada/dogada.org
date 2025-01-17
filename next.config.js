const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
})
module.exports = withMDX({
  output: "export",
  pageExtensions: ["js", "jsx", "mdx"]
})
