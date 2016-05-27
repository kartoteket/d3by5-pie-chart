'use:strict';
var base = require('base/index')
  , _ = require('underscore')
;

module.exports = pieChart;

/**
 * The entrypoint
 * @return {[type]} [description]
 */
function pieChart (_selection) {


  var chart = {
    init: function (selection) {
      var that = this;

      selection.each(function () {

        var barSpacing  = that.height / that.data.length;
        var barHeight   = barSpacing - that.padding;
        var maxValue    = d3.max(that.data);
        var widthScale  = that.width / maxValue;

        var dom = d3.select(that);
        var svg = dom.append('svg')
            .attr('class', 'chart barchart')
            .attr('height', that.height)
            .attr('width', that.width)
            .style('fill', that.fillColor);

        var bars = svg.selectAll('rect.chart__bar')
            .data(that.data)
            .enter()
            .append('rect')
            .attr('class', 'chart__bar')
            .attr('y', function (d, i) { return i * barSpacing;  })
            .attr('height', barHeight)
            .attr('x', 0)
            .attr('width', function (d) { return d * widthScale; });

      });
      return this;
    },

    fillColor: function(value) {
      if (!arguments.length) return this.fillColor;
      this.fillColor = value;
      return this;
    },

    /**
     * Sets the chart-padding
     * @param  {Number} value - the padding of the chart
     * @return {Mixed}        - the value or this
     */
    padding: function(value) {
      if (!arguments.length) return this.padding;
      this.padding = value;
      return this;
    },

  };

  // merge the base class in here
  chart = _.extend(chart, base);

  return chart.init(_selection);

}