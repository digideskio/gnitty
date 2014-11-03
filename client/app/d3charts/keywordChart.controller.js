'use strict';

angular.module('gnittyApp')
  .controller('KeywordChartCtrl', ['$scope', 'stats', function($scope, stats){
      $scope.options = {
                chart: {
                    type: 'scatterChart',
                    height: 600,
                    color: d3.scale.category10().range(),
                    scatter: {
                        onlyCircles: true
                    },
                    showDistX: false,
                    showDistY: false,
                    interactive: true,
                    tooltips: true,
                    tooltipContent: function(key) {
                      return '<h3>' + key + '</h3>';
                    },
                    transitionDuration: 1000,
                    forceSize: 0,
                    forceY: ([0]),
                    xAxis: {
                        axisLabel: '',
                        tickFormat: function (d){
                          return d3.format(',f')(d);
                        },
                        axisLabelDistance: 30
                    },
                    yAxis: {
                        axisLabel: 'Relevance',
                        tickFormat: function (d){
                          return d3.format('.02f')(d);
                        },
                        axisLabelDistance: 30
                    }
                }
            };

            $scope.data = generateData(1, stats.data.keywords.length);

            /* Random Data Generator (took from nvd3.org) */
            function generateData (groups, points) {
                var data = [],
                    shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
                    random = d3.random.normal();

                for (var i = 0; i < points; i++) {
                    data.push({
                        key: stats.data.keywords[i].text,
                        label: stats.data.keywords[i].text,
                        values: []
                    });
                        data[i].values.push({
                            x: i,
                            y: Number(stats.data.keywords[i].relevance),
                            size: .1,
                            shape: shapes[i % 6]
                        });
                }
                console.log(data);
                return data;
            };

  }]);