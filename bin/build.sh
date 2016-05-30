#!/bin/bash
#
# The buildscript for pie-charts
#
# Get the current version in package.json
# ref: https://gist.github.com/DarrenN/8c6a5b969481725a4413
#
# Version key/value should be on his own line
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo 'version is -'$PACKAGE_VERSION'-'



cleanbuild()
{
	echo 'Cleaning directories'
  rm -rf dist/*
}

buildall()
{
  echo 'Building full package version '$PACKAGE_VERSION
  # create the directories
  mkdir -p dist/withdeps & mkdir -p dist/nodeps
  # browserify the full dev version without any uglifying
  browserify -t aliasify src/pie-chart.js -o dist/withdeps/pie-chart.js
  # browserify and uglify full dev version, no version nomber included
  browserify -t aliasify src/pie-chart.js | uglifyjs -m -o dist/withdeps/pie-chart-min.js
  #browserify and uglify with dependencies and source maps
  browserify -t aliasify src/pie-chart.js | uglifyjs -m -o "dist/withdeps/pie-chart-${PACKAGE_VERSION}.min.js"
  browserify -t aliasify src/pie-chart.js -o "dist/withdeps/pie-chart-${PACKAGE_VERSION}.js"
 #--source-map "dist/withdeps/pie-chart-${PACKAGE_VERSION}.min.js.map" &
  #
  # uglify without dependencies, but with source map
  uglifyjs src/pie-chart.js  -m -o "dist/nodeps/pie-chart-${PACKAGE_VERSION}.min.js" \
  --source-map "dist/nodeps/pie-chart-${PACKAGE_VERSION}.min.js.map"
   uglifyjs src/pie-chart.js  -m -o dist/nodeps/pie-chart.min.js \
  --source-map dist/nodeps/pie-chart.min.js.map
}


cleanbuild
buildall