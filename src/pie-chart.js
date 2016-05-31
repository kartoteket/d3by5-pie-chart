'use:strict';
var _ = require('underscore')
  , d3 = require('d3')
;

module.exports = pieChart;

/**
 * The entrypoint
 * @return {[type]} [description]
 */
function pieChart (opt) {

  var options = opt ? _.clone(opt) : {};

  function chart (selection) {
    // set the defaults
    options.padding = options.padding || 0;
    options.innerRadius = options.innerRadius || 0;



      var width = options.width
        , height = options.height
        , radius = (Math.min(options.width, options.height) / 2) - (2 * options.padding)
        , arc
        , pie
        , svg
        , g
      ;

      arc = d3.svg.arc()
              .outerRadius(radius)
              .innerRadius(options.innerRadius);

      pie = d3.layout.pie()
              .sort(null)
              .value(function(d) { return d.values; });

      svg = selection.append("svg")
                      .attr("width", width)
                      .attr("height", height)
                      .append("g")
                        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      g = svg.selectAll(".arc")
              .data(pie(options.data))
              .enter().append("g")
                .attr("class", "arc");

       g.append("path")
        .attr("d", arc)
        .style("fill", function (d) {
          return d.data.color;
        });

        // multiple options must be added
        if (options.on) {
          g.on(options.on.action, options.on.method);
        }
    }


    chart.innerRadius = function (value) {
      if (!arguments.length) return options.innerRadius;
      options.innerRadius = value;
      return chart;
    };

    /**
     * Sets the padding of all sides in the chart
     * @param  {Number} value - the padding of the chart
     * @return {Mixed}        - the value or chart
     */
    chart.padding = function (value) {
      if (!arguments.length) return options.padding;
      options.padding = value;
      return chart;
    };

    /**
     * Sets the width of a chart
     * @param  {Number} value - the width of the chart
     * @return {Mixed}        - the value or this
     */
    chart.width = function (value) {
      if (!arguments.length) return options.width;
      options.width = value;
      return chart;
    };
    /**
     * Sets the height of a chart
     * @param  {Number} value - the height of the chart
     * @return {Mixed}        - the value or chart
     */
    chart.height = function (value) {
      if (!arguments.length) return options.height;
      options.height = value;
      return chart;
    };
    /**
     * Sets the data on a chart
     * @param  {Number} value - the data used to draw the chart
     * @return {Mixed}        - the value or chart
     */
    chart.data = function  (value) {
      if (!arguments.length) return options.data;
      options.data = value;
      return chart;
    };
    /**
     * Sets a listener on the clices of the chart
     * @param  {String} action    - the type of action to listen to ( ie. 'click', 'mouseover')
     * @param  {Function} method  -  A bound method to be called when the action is invoked, passes the datum for this specific slice
     * @return {Mixed}            - the value or chart
     */
    chart.on = function (action, method) {
      if (!arguments.length) return options.on;
      options.on = {action: action, method: method};
      return chart;
    };

  return chart;
}