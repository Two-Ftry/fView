<template>
  <div class="svg-box">
      <div class="svg-box1">
      </div>
      <div class="svg-box2">
      </div>
      <div class="svg-box3">
          <div>
              <button @click="renderDataInterpolate('curveLinear')">curveLinear</button>
              <button @click="renderDataInterpolate('curveLinearClosed')">curveLinearClosed</button>
              <button @click="renderDataInterpolate('curveStep')">curveStep</button>
              <button @click="renderDataInterpolate('curveStepBefore')">curveStepBefore</button>
              <button @click="renderDataInterpolate('curveStepAfter')">curveStepAfter</button>
              <button @click="renderDataInterpolate('curveBasis')">curveBasis</button>
              <button @click="renderDataInterpolate('curveBasisOpen')">curveBasisOpen</button>
              <button @click="renderDataInterpolate('curveBasisClosed')">curveBasisClosed</button>
              <button @click="renderDataInterpolate('curveBundle')">curveBundle</button>
              <button @click="renderDataInterpolate('curveCardinal')">curveCardinal</button>
              <button @click="renderDataInterpolate('curveCardinalOpen')">curveCardinalOpen</button>
              <button @click="renderDataInterpolate('curveCardinalClosed')">curveCardinalClosed</button>
              <button @click="renderDataInterpolate('curveMonotoneX')">curveMonotoneX</button>
          </div>
      </div>
      <div class="svg-box4">
        
      </div>
      <div class="svg-box5">
        <div>
            <button @click="renderPie(200, 0)">Circle</button>
              <button @click="renderPie(200, 100)">Donut</button>
              <button @click="renderPie(200, 0, Math.PI)">Circular Sector</button>
              <button @click="renderPie(200, 100, Math.PI)">Annulus Sector</button>
        </div>
      </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
export default {
    mounted () {
        // this.renderSimpleSvg();
        // this.renderDataSvg();
        // this.renderDataInterpolate();
        // this.renderArea();
        this.renderPie()
    },
    methods: {
        renderSimpleSvg () {
            const selector = '.svg-box1';
            const width = 600, height = 500;
            const svg = d3.select(selector)
                .append('svg')
                .attr('width', width + 'px')
                .attr('height', height + 'px');
            
            svg.append('line')
                .attr('x1', 0)
                .attr('y1', 200)
                .attr('x2', 100)
                .attr('y2', 100)
                .style('stroke', 'red')
                .style('stroke-width', 2);

            // 矩形
            svg.append('rect')
                .attr('x', 100)
                .attr('y', 100)
                .attr('width', 100)
                .attr('height', 100)
                .style('stroke', 'red')
                .style('stroke-width', 2);

            // 圆形
            svg.append('circle')
                .attr('cx', 250)
                .attr('cy', 150)
                .attr('r', 50);
            
            // 多边形
            svg.append('polygon')
                .attr('points', '350,100 400,200 300,200')

            svg.append('path')
                .attr('d','M0 400 L100 300 M100,300 L200,300 L200,400 L100,400 Z M350,300 L400,400 L300,400 Z')
                .style('stroke', 'red')
                .style('stroke-width', 2);

            svg.append('path')
                .attr('d', 'M0 500 C0 500 50 480 100 400')
                .style('stroke', 'green')
                .style('stroke-width', 2);
        },
        renderDataSvg () {
            const selector = '.svg-box2';
            const width = 600, height = 500;
            const margin = 30;
            const svg = d3.select(selector)
                .append('svg')
                .attr('width', width + 'px')
                .attr('height', height + 'px');

            const x = d3.scaleLinear()
                .domain([0, 10])
                .range([0, width - margin*2]);
            const y = d3.scaleLinear()
                .domain([0, 10])
                .range([height - margin*2, 0]);

            const data = 
                [[

                    {x: 0, y: 5},
                    {x: 1, y: 9},
                    {x: 2, y: 7},
                    {x: 10,y: 6}
                ]
                ];
            
            const line = d3.line()
                .x(function(d) {
                    return x(d.x) + margin
                })
                .y(function(d){
                    return y(d.y) + margin
                });
            svg.selectAll('path')
                .data(data)
                .enter()
                .append('path')
                .attr('class', 'line')
                .attr('d', function(d) {
                    return line(d);
                })

                // 坐标轴
            const yAxis = d3.axisLeft(y).ticks(5);
            const xAxis = d3.axisBottom(x).ticks(5);
            svg.append('g')
                .attr('transform', () => {
                    return `translate(${margin}, ${margin})`
                })
                .call(yAxis);
            svg.append('g')
                .attr('transform', () => {
                    return `translate(${margin}, ${height - margin})`
                })
                .call(xAxis);
        },
        renderDataInterpolate (mode) {
            const selector = '.svg-box3';
            const width = 600, height = 500;
            const margin = 30;
            
            const data = 
                [[

                    {x: 0, y: 5},
                    {x: 1, y: 9},
                    {x: 2, y: 7},
                    {x: 3,y: 6},
                    {x: 4,y: 3},
                    {x: 5,y: 9},
                    {x: 6,y: 1},
                    {x: 7,y: 4},
                    {x: 8,y: 8},
                    {x: 9,y: 7.5},
                    {x: 10,y: 2}
                ]
                ];
            
            var x = d3.scaleLinear()
                .domain([0, 10])
                .range([0, width - 2 * margin]);
            
            var y = d3.scaleLinear()
                .domain([0, 10])
                .range([height - 2 * margin, 0]);

            // d3.select(selector)
            d3.select(selector).select('svg').remove();
            
            var svg = d3.select(selector)
                    .append('svg')
                    .attr('width', width - 2 * margin)
                    .attr('height', height - 2 * margin);

            const render = (m) => {
                var line = d3.line()
                    .x((d) => {
                        return x(d.x) + margin;
                    })
                    .y((d) => {
                        return y(d.y) + margin;
                    })
                    .curve(m)

                svg.selectAll('path.line')
                    .data(data)
                    .enter()
                    .append('path')
                    .attr('class', 'line')
                    .attr('d', function(item) {
                        return line(item);
                        // return line.tension(item)(data);
                    });
                svg.selectAll('path.line')
                    .data(data)
                    .exit()
                    .remove();
            };

            const renderDots = (svg) => {
                data.forEach((dataSet) => {
                    var g = svg.append('g');
                    g.selectAll('circle')
                    .data(dataSet)
                    .enter()
                    .append('circle')
                    .attr('cx', (d) => {
                        return x(d.x) + margin
                    })
                    .attr('cy', (d) => {
                        return y(d.y) + margin
                    })
                    .attr('r', 5);

                    g.selectAll('circle')
                    .data(dataSet)
                    .exit()
                    .remove();
                });
            }
            mode = mode || 'curveCardinal'
            render(d3[mode]);
            renderDots(svg);
        },
        renderArea () {
            const selector = '.svg-box4';
            const width = 600, height = 500;
            const margin = 30;
            
            const data = 
                [[

                    {x: 0, y: 5},
                    {x: 1, y: 9},
                    {x: 2, y: 7},
                    {x: 3,y: 6},
                    {x: 4,y: 3},
                    {x: 5,y: 9},
                    {x: 6,y: 1},
                    {x: 7,y: 4},
                    {x: 8,y: 8},
                    {x: 9,y: 7.5},
                    {x: 10,y: 2}
                ]
                ];
            
            var x = d3.scaleLinear()
                .domain([0, 10])
                .range([0, width - 2 * margin]);
            
            var y = d3.scaleLinear()
                .domain([0, 10])
                .range([height - 2 * margin, 0]);
            
            const svg = d3.select(selector).append('svg')
                    .attr('width', width - 2 * margin)
                    .attr('height', height - 2 * margin);;

            const line = d3.line()
                .x((d) => {
                    return x(d.x) + margin
                })
                .y((d) => {
                    return y(d.y) + margin
                })
                .curve(d3.curveStepAfter);

            const area = d3.area()
                .x((d) => {
                    return x(d.x) + margin
                })
                .y0(y(0))
                .y1((d) => {
                    return y(d.y) + margin
                })
                .curve(d3.curveStepAfter);

            svg.selectAll('path.area')
                .data(data)
                .enter()
                .append('path')
                .classed('area', true)
                // .style('fill', 'green')
                .attr('d', (d) => {
                    return area(d)
                })
                svg.selectAll('path.line')
                .data(data)
                .enter()
                .append('path')
                .classed('line', true)
                // .style('fill', 'green')
                .attr('d', (d) => {
                    return line(d)
                })

                data.forEach((dataSet) => {
                    var g = svg.append('g');
                    g.selectAll('circle')
                    .data(dataSet)
                    .enter()
                    .append('circle')
                    .attr('cx', (d) => {
                        return x(d.x) + margin
                    })
                    .attr('cy', (d) => {
                        return y(d.y) + margin
                    })
                    .attr('r', 5);

                    g.selectAll('circle')
                    .data(dataSet)
                    .exit()
                    .remove();
                });
        },
        renderPie (outerRadius, innerRadius, endAngle) {
            const selector = '.svg-box5';
            const width = 600, height = 500;
            const margin = 30;
            
            outerRadius = outerRadius || 200;
            innerRadius = innerRadius || 0;
            const fullAngle = 2 * Math.PI;
            endAngle = endAngle || fullAngle;

            const colors = d3.scaleOrdinal(d3.schemeCategory20c);

            const data = [
                { startAngle: 0, endAngle: 0.1 * endAngle},
                { startAngle: 0.1 * endAngle, endAngle: 0.2 * endAngle},
                { startAngle: 0.2 * endAngle, endAngle: 0.4 * endAngle},
                { startAngle: 0.4 * endAngle, endAngle: 0.6 * endAngle},
                { startAngle: 0.6 * endAngle, endAngle: 0.7 * endAngle},
                { startAngle: 0.7 * endAngle, endAngle: 0.9 * endAngle},
                { startAngle: 0.9 * endAngle, endAngle: endAngle}
            ];

            const arc = d3.arc()
                .outerRadius(outerRadius)
                .innerRadius(innerRadius);
            
            d3.select(selector).select('svg').remove();

            const svg = d3.select(selector)
                .append('svg')
                .attr('width', width + 'px')
                .attr('height', height + 'px');
            
            // svg.selectAll('path.arc')
            //     .data(data)
            //     .enter()
            //     .append('path')
            //     .classed('arc', true)
            //     .attr('transform', 'translate(200, 200)')
            //     .attr('fill', (d, i) => {
            //         return colors(i);
            //     })
            //     .attr('d', () => {
            //         return arc({startAngle: 0, endAngle: 0})
            //     })
            //     .transition()
            //     .duration(1000)
            //     .ease(function (t) {
            //             return d3.easeLinear(t);
            //         })
            //     .attr('d', (d) => {
            //         return arc(d);
            //     })
            svg.selectAll('path.arc')
                .data(data)
                .enter()
                .append('path')
                .classed('arc', true)
                .attr('transform', 'translate(200, 200)')
                .attr('fill', (d, i) => {
                    return colors(i);
                })
                .transition()
                .duration(1000)
                .attrTween('d', (d) => {
                    // return arc({startAngle: 0, endAngle: 0})
                    const interpolate = d3.scaleLinear()
                        .domain([0, 1])
                        .range([
                            {startAngle: 0, endAngle: 0},
                            d
                        ]);
                    return (t) => {
                        console.log('@@@', t)
                        return arc(interpolate(t));
                    }
                })
        }
    }
}
</script>

<style>

</style>
