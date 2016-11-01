// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,

//
// We add paths to everything here as it is a test
//
//
requirejs.config({
    paths: {
        'pie-chart': '../../../src/pie-chart',
        'd3': 'lib/d3',
        'underscore': 'lib/underscore-1.8.3',
        'base-chart': 'lib/base-chart',
        'transitions': 'lib/transitions',
        'base-chart-utils': 'lib/base-chart-utils',
        'base-chart-axis': 'lib/base-chart-axis',
    },
});


require(['pie-chart','underscore','d3'], function (piechart, _, d3) {
  'use strict';
var singleData = [{"values": 864,"label": "Afghanistan"},
                  {"values": 2,"label": "Albania"},
                  {"values": 36,"label": "Algeria"},
                  {"values": 2,"label": "Azerbaijan"},
                  {"values": 552,"label": "Bangladesh"},
                  {"values": 1,"label": "Benin"},
                  {"values": 4,"label": "Burkina Faso"},
                  {"values": 1,"label": "Cameroon"},
                  {"values": 1,"label": "Chad"},
                  {"values": 5,"label": "Côte D'ivoire"},
                  {"values": 827,"label": "Egypt"},
                  {"values": 1161,"label": "Eritrea"},
                  {"values": 84,"label": "Ethiopia"},
                  {"values": 242,"label": "Gambia"},
                  {"values": 15,"label": "Ghana"},
                  {"values": 25,"label": "Guinea"},
                  {"values": 6,"label": "Guinea-Bissau"},
                  {"values": 74,"label": "India"},
                  {"values": 85,"label": "Iran"},
                  {"values": 124,"label": "Iraq"},
                  {"values": 1,"label": "Jamaica"},
                  {"values": 1,"label": "Latvia"},
                  {"values": 1,"label": "Liberia"},
                  {"values": 20,"label": "Libya"},
                  {"values": 184,"label": "Mali"},
                  {"values": 79,"label": "Morocco"},
                  {"values": 1,"label": "Nepal"},
                  {"values": 3,"label": "Niger"},
                  {"values": 259,"label": "Nigeria"},
                  {"values": 1198,"label": "Pakistan"},
                  {"values": 32,"label": "Palestine"},
                  {"values": 0,"label": "Romania"},
                  {"values": 1,"label": "Russia"},
                  {"values": 48,"label": "Senegal"},
                  {"values": 4,"label": "Sierra Leone"},
                  {"values": 1292,"label": "Somalia"},
                  {"values": 17,"label": "Sudan"},
                  {"values": 393,"label": "Syria"},
                  {"values": 4,"label": "Togo"},
                  {"values": 2147,"label": "Tunisia"},
                  {"values": 48,"label": "Turkey"},
                  {"values": 7,"label": "Ukraine"},
                  {"values": 1,"label": "Zimbabwe"}]
    , groupedData = [{"label":"09-2006","values":[
                                                  {"label":"Syria","values":308},
                                                  {"label":"Afghanistan","values":324}
                                                  ]},
                    {"label":"10-2006","values":[
                                                  {"label":"Afghanistan","values":460},
                                                  {"label":"Syria","values":396}
                                                  ]},
                    {"label":"11-2006","values":[
                                                  {"label":"Syria","values":344},
                                                  {"label":"Afghanistan","values":328}
                                                  ]},
                    {"label":"12-2006","values":[
                                                  {"label":"Afghanistan","values":588},
                                                  {"label":"Syria","values":344}
                                                  ]},
                    {"label":"01-2007","values":[
                                                  {"label":"Afghanistan","values":412},
                                                  {"label":"Syria","values":436}
                                                  ]},
                    {"label":"02-2007","values":[
                                                  {"label":"Syria","values":252},
                                                  {"label":"Afghanistan","values":372}
                                                  ]},
                    {"label":"03-2007","values":[
                                                  {"label":"Afghanistan","values":296},
                                                  {"label":"Syria","values":288}
                                                  ]},
                    {"label":"04-2007","values":[
                                                  {"label":"Syria","values":252},
                                                  {"label":"Afghanistan","values":284}
                                                  ]},
                    {"label":"05-2007","values":[
                                                  {"label":"Afghanistan","values":280},
                                                  {"label":"Syria","values":284}
                                                  ]},
                    {"label":"06-2007","values":[
                                                  {"label":"Syria","values":212},
                                                  {"label":"Afghanistan","values":328}
                                                  ]},
                    {"label":"07-2007","values":[
                                                  {"label":"Afghanistan","values":296},
                                                  {"label":"Syria","values":232}
                                                  ]},
                    {"label":"08-2007","values":[
                                                  {"label":"Syria","values":424},
                                                  {"label":"Afghanistan","values":272}
                                                  ]},
                    {"label":"09-2007","values":[
                                                  {"label":"Afghanistan","values":240},
                                                  {"label":"Syria","values":416}
                                                  ]},
                    {"label":"10-2007","values":[
                                                  {"label":"Syria","values":492},
                                                  {"label":"Afghanistan","values":308}
                                                  ]},
                    {"label":"11-2007","values":[
                                                  {"label":"Afghanistan","values":332},
                                                  {"label":"Syria","values":504}
                                                  ]},
                    {"label":"12-2007","values":[
                                                  {"label":"Syria","values":384},
                                                  {"label":"Afghanistan","values":332}
                                                  ]},
                    {"label":"01-2008","values":[
                                                  {"label":"Afghanistan","values":488},
                                                  {"label":"Syria","values":428}
                                                  ]},
                    {"label":"02-2008","values":[
                                                  {"label":"Syria","values":472},
                                                  {"label":"Afghanistan","values":372}
                                                  ]},
                    {"label":"03-2008","values":[
                                                  {"label":"Afghanistan","values":184},
                                                  {"label":"Syria","values":368}
                                                  ]},
                    {"label":"04-2008","values":[
                                                  {"label":"Syria","values":428},
                                                  {"label":"Afghanistan","values":260}
                                                  ]},
                    {"label":"05-2008","values":[
                                                  {"label":"Afghanistan","values":244},
                                                  {"label":"Syria","values":352}
                                                  ]},
                    {"label":"06-2008","values":[
                                                  {"label":"Syria","values":372},
                                                  {"label":"Afghanistan","values":308}
                                                  ]},
                    {"label":"07-2008","values":[
                                                  {"label":"Afghanistan","values":332},
                                                  {"label":"Syria","values":516}
                                                  ]},
                    {"label":"08-2008","values":[
                                                  {"label":"Syria","values":484},
                                                  {"label":"Afghanistan","values":620}
                                                  ]},
                    {"label":"09-2008","values":[
                                                  {"label":"Afghanistan","values":836},
                                                  {"label":"Syria","values":476}
                                                  ]},
                    {"label":"10-2008","values":[
                                                  {"label":"Syria","values":528},
                                                  {"label":"Afghanistan","values":688}
                                                  ]},
                    {"label":"11-2008","values":[
                                                  {"label":"Afghanistan","values":604},
                                                  {"label":"Syria","values":372}
                                                  ]},
                    {"label":"12-2008","values":[
                                                  {"label":"Syria","values":384},
                                                  {"label":"Afghanistan","values":800}
                                                  ]},
                    {"label":"01-2009","values":[
                                                  {"label":"Afghanistan","values":1648},
                                                  {"label":"Syria","values":436}
                                                  ]},
                    {"label":"02-2009","values":[
                                                  {"label":"Syria","values":532},
                                                  {"label":"Afghanistan","values":1204}
                                                  ]},
                    {"label":"03-2009","values":[
                                                  {"label":"Afghanistan","values":1024},
                                                  {"label":"Syria","values":372}
                                                  ]},
                    {"label":"04-2009","values":[
                                                  {"label":"Syria","values":384},
                                                  {"label":"Afghanistan","values":872}
                                                  ]},
                    {"label":"05-2009","values":[
                                                  {"label":"Afghanistan","values":1052},
                                                  {"label":"Syria","values":404}
                                                  ]},
                    {"label":"06-2009","values":[
                                                  {"label":"Syria","values":368},
                                                  {"label":"Afghanistan","values":1276}
                                                  ]},
                    {"label":"07-2009","values":[
                                                  {"label":"Afghanistan","values":1804},
                                                  {"label":"Syria","values":504}
                                                  ]},
                    {"label":"08-2009","values":[
                                                  {"label":"Syria","values":436},
                                                  {"label":"Afghanistan","values":2024}
                                                  ]},
                    {"label":"09-2009","values":[
                                                  {"label":"Afghanistan","values":2188},
                                                  {"label":"Syria","values":484}
                                                  ]},
                    {"label":"10-2009","values":[
                                                  {"label":"Syria","values":708},
                                                  {"label":"Afghanistan","values":2284}
                                                  ]},
                    {"label":"11-2009","values":[
                                                  {"label":"Afghanistan","values":2580},
                                                  {"label":"Syria","values":568}
                                                  ]},
                    {"label":"12-2009","values":[
                                                  {"label":"Syria","values":428},
                                                  {"label":"Afghanistan","values":2320}
                                                  ]},
                    {"label":"01-2010","values":[
                                                  {"label":"Afghanistan","values":2768},
                                                  {"label":"Syria","values":512}
                                                  ]},
                    {"label":"02-2010","values":[
                                                  {"label":"Syria","values":456},
                                                  {"label":"Afghanistan","values":2544}
                                                  ]},
                    {"label":"03-2010","values":[
                                                  {"label":"Afghanistan","values":2416},
                                                  {"label":"Syria","values":520}
                                                  ]},
                    {"label":"04-2010","values":[
                                                  {"label":"Syria","values":452},
                                                  {"label":"Afghanistan","values":2056}
                                                  ]},
                    {"label":"05-2010","values":[
                                                  {"label":"Afghanistan","values":1844},
                                                  {"label":"Syria","values":540}
                                                  ]},
                    {"label":"06-2010","values":[
                                                  {"label":"Syria","values":624},
                                                  {"label":"Afghanistan","values":2248}
                                                  ]},
                    {"label":"07-2010","values":[
                                                  {"label":"Afghanistan","values":2960},
                                                  {"label":"Syria","values":612}
                                                  ]},
                    {"label":"08-2010","values":[
                                                  {"label":"Syria","values":832},
                                                  {"label":"Afghanistan","values":3416}
                                                  ]},
                    {"label":"09-2010","values":[
                                                  {"label":"Afghanistan","values":2284},
                                                  {"label":"Syria","values":684}
                                                  ]},
                    {"label":"10-2010","values":[
                                                  {"label":"Syria","values":648},
                                                  {"label":"Afghanistan","values":2268}
                                                  ]},
                    {"label":"11-2010","values":[
                                                  {"label":"Afghanistan","values":1988},
                                                  {"label":"Syria","values":520}
                                                  ]},
                    {"label":"12-2010","values":[
                                                  {"label":"Syria","values":604},
                                                  {"label":"Afghanistan","values":2384}
                                                  ]}]
    , pc = piechart()
                    .width(500)
                    .height(400)
                    .data(singleData);

    var caller = _.bind(pc.init, pc);
d3.select('.js-pie-chart')
    .call(caller);

     // bg = bargraph()
     //                .width(700)
     //                .height(500)
     //                // .valuesPosition('fit')
     //                .barLayout('stacked')
     //                .anchor('bottom')
     //                .margin(0,0,50,50)
     //                .data(groupedData);




    // var axis = bg.axis()

    // axis.scale(bg.getOrdinalScale())
    //     .align('bottom')
    //     .ticks('auto', null)
    //     .show(true);

                  // .align('bottom')
                  // .show(true);

  // axis.scale()
/*
var caller = _.bind(bg.init, bg);

d3.select('.js-bar-chart')
    .call(caller);

// margins
d3.select('.js-margin-button').on('click', function (d) {
  var top = d3.select('.js-margin-top').node().valueAsNumber
    , right = d3.select('.js-margin-right').node().valueAsNumber
    , bottom = d3.select('.js-margin-bottom').node().valueAsNumber
    , left = d3.select('.js-margin-left').node().valueAsNumber
  ;

  bg.margin(top,right,bottom,left).draw();
  console.log(d, arguments);
});

// x ticks
d3.select('.js-x-ticks-button').on('click', function (d) {
  var numTicks = d3.select('.js-x-ticks').node().value
  ;

  bg.axis().ticks(numTicks).draw();
  console.log(numTicks);
});


// direction
d3.select('.js-direction-select').on('change', function (d) {
  // var dir = d3.select('.js-direction-select').node().valueAsNumber
  var dir = this.children[this.selectedIndex].value
    , axisDir = dir === 'bottom' || dir === 'top' ? 'left' : 'bottom';


  bg.anchor(dir).axis().align({linear:axisDir, ordinal: dir}).draw();
  console.log(d, arguments);
});

// dimensions
d3.select('.js-dimension-button').on('click', function (d) {
  var width = d3.select('.js-width').node().valueAsNumber
    , height = d3.select('.js-height').node().valueAsNumber
  ;

  bg.height(height).width(width).draw();
  console.log(d, arguments);
});


// rotation
d3.select('.js-rotation-button').on('click', function (d) {
  var linear = d3.select('.js-linear-rotate').node().valueAsNumber
    , ordinal = d3.select('.js-ordinal-rotate').node().valueAsNumber
  ;

  bg.axis().rotate({linear: linear, ordinal: ordinal}).draw();
  console.log(d, arguments);
});

*/


});