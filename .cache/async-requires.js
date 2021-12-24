// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-proj-1-index-js": () => import("./../../../src/pages/proj1/index.js" /* webpackChunkName: "component---src-pages-proj-1-index-js" */),
  "component---src-pages-proj-2-index-js": () => import("./../../../src/pages/proj2/index.js" /* webpackChunkName: "component---src-pages-proj-2-index-js" */),
  "component---src-pages-proj-3-index-js": () => import("./../../../src/pages/proj3/index.js" /* webpackChunkName: "component---src-pages-proj-3-index-js" */)
}

