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

#### dist/
A browserified and uglified version with all dependencies included. Use this if you only want a simple graph to test.
* pie-chart-[version].min.js    // uglified and minified with version
* pie-chart.min.js              // uglified and minified without version

## DEPENDENCIES
The only dependency is
* Underscore
```
npm install underscore
```


## API
* fillColor - String/hex: the fillcolor (optional, defaults to 'coral')
* padding - Number: the padding to use (optional, detaults to 2)
* width  - Number: the height of the chart (mandatory)
* height - Number: the width of the chart (mandatory)
* data   - Array: the data that produces the chart (optional, but no chart without it) [{label: String, value: Number}, {xx}]


