# d3by5-pie-chart
The d3by5 is part of the d3by5 graph tools, this specific package will draw a pie chart based on Mike Bostocks [Towards Reusable Charts](https://bost.ocks.org/mike/chart/) using d3 v4.0

## USAGE
Build the project by running
```bash
npm run build
```


When building two versions are built in the dist folder.
use the [version] version if you want to keep a specific version, use submodules or symlinks (or download) of the one without version if you want to update the lib without updating your code

withdeps has no source maps yet

#### dist/nodeps
a minified and uglified version, just the file, no dependencies bundled, it comes with a source map. Use this version if you load the dependencies elsewhere and want to use multiple graphs.
* pie-chart-[version].min.js     // uglified with version
* pie-chart-[version].min.js.map // source map
* pie-chart.min.js               // uglified without version
* pie-chart.min.js.map           // source map

#### dist/withdeps
A browserified and uglified version with all dependencies included. Use this if you only want a simple graph to test.
* pie-chart-[version].min.js    // uglified and minified with version
* pie-chart-[version].js        // non minified with version
* pie-chart.min.js              // uglified and minified without version
* pie-chart.js                  // non minified without version

## DEPENDENCIES
two dependencies
* Underscore
```
npm install underscore
```
* Base Graph. This in not yet a npm module but can be found [here](https://github.com/kartoteket/d3by5-base-chart) The graph looks for 'd3by5-base-graph' use [aliasify](https://www.npmjs.com/package/aliasify) or similar to shim the file or just domnload or link to top level


## API
### Pie chart specific

### Common API from the [d3by5-base-chart](https://github.com/kartoteket/d3by5-base-chart)
* width  - the height of the chart (mandatory)
* height - the width of the chart (mandatory)
* data   - the data that produces the chart (optional, but no chart without it)
