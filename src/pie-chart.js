'use:strict';
var _ = require('underscore')
;

module.exports = pieChart;

/**
 * The entrypoint
 * @return {[type]} [description]
 */
function pieChart () {

  var chart = function (selection) {
      var options = {};

      selection.each(function () {

        var barSpacing  = options.height / options.data.length;
        var barHeight   = barSpacing - options.padding;
        var maxValue    = d3.max(options.data);
        var widthScale  = options.width / maxValue;

        var dom = d3.select(this);
        var svg = dom.append('svg')
            .attr('class', 'chart barchart')
            .attr('height', options.height)
            .attr('width', options.width)
            .style('fill', options.fillColor);

        var bars = svg.selectAll('rect.chart__bar')
            .data(options.data)
            .enter()
            .append('rect')
            .attr('class', 'chart__bar')
            .attr('y', function (d, i) { return i * barSpacing;  })
            .attr('height', barHeight)
            .attr('x', 0)
            .attr('width', function (d) { return d * widthScale; });

      });


    chart.fillColor = function (value) {
      if (!arguments.length) return options.fillColor;
      options.fillColor = value;
      return chart;
    };

    /**
     * Sets the chart-padding
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
      if (!arguments.length) return options.height;
      options.height = value;
      return chart;
    };


  };

  return chart;


}