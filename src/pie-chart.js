/*!
 * Pie charts
 *
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['underscore', 'd3', './base-chart', './transitions'] , factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('underscore'), require('d3'), require('./base-chart'), require('./transitions'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root._, root.d3, root.d3by5BaseChart, root.d3by5Transitions);
    }
}(this, function (_, d3, base, transitions) {

'use:strict';


/**
 * The entrypoint
 * @return {[type]} [description]
 */
function pieChart () {

  var chart = {

    type: 'pie',

    options: {
        padding: 2,
        size: 100,
        innerRadius: 0,
        transitionDuration: 1000
    },

    init: function (selection) {

      if (arguments.length) {
        this.selection = selection;
        this.draw(selection);
      }
      return this;
    },

    draw: function () {
      var width = this.options.width
        , height = this.options.height
        , adjustedHeight = (height - (this.options.margin.top + this.options.margin.bottom)) / 2
        , adjustedWidth = (width - (this.options.margin.left + this.options.margin.right)) / 2
        , radius =  Math.min(adjustedHeight, adjustedWidth)
        , innerRadius = this.options.innerRadius

      ;

      if (this.options.size && this.options.size !== 100) {
        radius = radius * (this.options.size / 100);
        innerRadius = innerRadius * (this.options.size / 100);
      }


      this.radius = radius;
      this.innerRadius = innerRadius;

      this.arc = d3.svg.arc()
              .outerRadius(radius)
              .innerRadius(innerRadius); 

      this.pie = d3.layout.pie()
              .sort(null)
              .value(function(d) {
                return d.values;
              });

      // remove old
      if (this.svg) {
        this.svg.remove();
      }

      this.svg = this.selection.append("svg")
                      .attr("width", width)
                      .attr("height", height)
                      .append("g")
                        .attr("transform", "translate(" + (this.options.margin.left + adjustedWidth) + "," + (this.options.margin.top + adjustedHeight) + ")");

      this.render();

    },


    render: function () {
      // If there are any transitions
      // hijack the data update function
      if (this.options.transition && this.options.transition.t) {
        this.options.transition.t();
      }


      var path
        , that = this
        , drawEvent
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
                  return that.options.fillColor(d.data.label);
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

      if (this.options.valuesPosition !== 'none') {
        this.drawValues();
      }

      // apply any events that was unbound
      this.applyEvents();

      drawEvent = _.find(this.options.on, function (o) {
        return o.action === 'draw';
      });

      if (drawEvent && _.isFunction (drawEvent.method)) {
        drawEvent.method.call(this);
      }
    },
    drawValues: function () {
      var that = this;

      this.arcs.filter(function(d) { 
                        return d.endAngle - d.startAngle > 0.2; })
              .append('text')
            .attr('dy', '.35em')
            .attr('text-anchor', 'middle')
            .attr('transform', function(d, i) { //set the label's origin to the center of the arc
              var _obj = {endAngle: d.endAngle,
                          innerRadius: that.radius/2,
                          outerRadius: that.radius,
                          padAngle: d.padAngle,
                          startAngle: d.startAngle};

              return 'translate(' + that.arc.centroid(_obj, i) + ')rotate(' + that.angle(_obj) + ')';
            })
            .style('fill', 'White')
            .style('font', 'bold 12px Arial')
      .text(function(d) {
        return d.data.values;
      });
    },

        // Computes the angle of an arc, converting from radians to degrees.
    angle: function(d) {
      var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
      return a > 90 ? a - 180 : a;
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
    },

    /**
     * Sets the size, this is a percentage modifier, and should normally not exceede 100, but of cource it is possible
     * @param  {Number} value - the percent to add to the calculated size
     * @return {Mixed}        - the value or chart
     */
    size: function (value) {
      if (!arguments.length) return this.options.size;
      this.options.size = value;
      return chart;
    },

    applyEvents: function () {
      var that = this
        , path = this.svg
                .selectAll("path");
      if (path) {
        _.each(this.options.on, function (value, key) {
          path.on(key, value);
        });
      }
    }

  };
  chart.options = _.extend(chart.options, base.options);
  chart = _.extend(chart, _.omit(base, 'options'), transitions);

  return (chart.init());
}
return pieChart;
}));