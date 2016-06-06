'use:strict';
var _ = require('underscore')
  , d3 = require('d3')
  , base = require('d3by5-base-chart')
;

module.exports = pieChart;

/**
 * The entrypoint
 * @return {[type]} [description]
 */
function pieChart (opt) {

  var chart = {


    options: {
        padding: 2,
        innerRadius: 0
    },

    init: function (selection) {

      if (arguments.length) {
        this.draw(selection);
      }
      return this;
    },

    draw: function (selection) {

      var width = this.options.width
        , height = this.options.height
        , radius = (Math.min(this.options.width, this.options.height) / 2) - (2 * this.options.padding)
        , svg
        , g
        , render
        , arcTween
      ;

      this.arc = d3.svg.arc()
              .outerRadius(radius)
              .innerRadius(this.options.innerRadius);

      this.pie = d3.layout.pie()
              .sort(null)
              .value(function(d) { return d.values; });

      this.svg = selection.append("svg")
                      .attr("width", width)
                      .attr("height", height)
                      .append("g")
                        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      this.render();

      // add the updatemethods
      // ref: https://www.toptal.com/d3-js/towards-reusable-d3-js-charts
      // ref: https://bl.ocks.org/mbostock/1346410
      this.updateData = function () {
        this.render();
      };

    },

    render: function () {
      var path
        , that = this
        , arcTween = function (a) {
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t) {
              return that.arc(i(t));
            };
          }; // redraw the arcs

      //data join
      path = this.svg
                .selectAll("path")
                .data(this.pie(this.options.data), function (d) {
                  return d.data.label;
                });

      // update, transition
      path.transition()
          .duration(1000)
          .attrTween("d", arcTween);

      // create new elements
      path.enter().append("path")
                .attr("fill", function(d) {
                  return d.data.color;
                })
                .attr("d", that.arc)
                .transition()
                .duration(1000)
                .attrTween("d", arcTween)
                .each(function(d) {
                  this._current = d;
                }); // store the initial angles

      // remove unused data
      path.exit()
          .transition()
          .attrTween("d", arcTween)
          .remove();

      // multiple options must be added
      if (this.options.on) {
        path.on(this.options.on.action, this.options.on.method);
      }
    },
    /**
     * Sets the innerradius (a innerradius > 0 creates a donut)
     * @param  {Number} value - the innerRadius of the chart
     * @return {Mixed}        - the value or chart
     */
    innerRadius: function (value) {
      if (!arguments.length) return this.options.innerRadius;
      this.options.innerRadius = value;
      return chart;
    }

  };

  chart = _.extend(chart, base);
  return (chart.init());
}