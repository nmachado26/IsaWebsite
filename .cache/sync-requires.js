const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-cluse-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/cluse/index.js"))),
  "component---src-pages-ditto-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/ditto/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/index.js"))),
  "component---src-pages-phisher-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/phisher/index.js"))),
  "component---src-pages-proj-1-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/proj1/index.js"))),
  "component---src-pages-proj-2-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/proj2/index.js"))),
  "component---src-pages-proj-3-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/proj3/index.js"))),
  "component---src-pages-semaphore-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/semaphore/index.js"))),
  "component---src-pages-trunks-index-js": hot(preferDefault(require("/Users/nicolasmachado/Documents/projects/IsaWebsite/src/pages/trunks/index.js")))
}

