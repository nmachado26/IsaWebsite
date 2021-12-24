const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/index.js"))),
  "component---src-pages-proj-1-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/proj1/index.js"))),
  "component---src-pages-proj-2-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/proj2/index.js"))),
  "component---src-pages-proj-3-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/proj3/index.js")))
}

