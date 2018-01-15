<template>
<div class="animation-box">
    d3 aniamtion
    <div class="animation-multi">
    </div>
    <div class="animation-custom">
    </div>
    <div class="animation-tweening">
        <p>5-中间帧</p>
    </div>
    <div class="animation-left">
        <p>集联效果</p>
        <button @click="originSet">还原</button>
        <button @click="renderLittleBox">传送</button>
        <div class="little-box"></div>
    </div>
</div>
</template>

<script>
    import * as d3 from 'd3';
    export default {
        name: '',
        data () {
            return {}
        },
        mounted () {
//            this.init()
//            this.multiEleRender();
//            this.renderEase();
//            this.renderTweening();
            this.renderLittleBox();
        },
        methods:{
            init () {
                const box = d3.select('.animation-box');
                const duration = 5000;
                box.append('div')
                    .classed('box', true)
                    .style('background-color', '#e9967a')
                    .transition()
                    .duration(duration)
                    .style('background-color', '#add8e6')
                    .style('margin-left', '600px')
                    .style('width', '100px')
                    .style('height', '100px')
            },
            multiEleRender () {
                let id = 0;
                const data = [];
                const duration = 500;
                const chartWidth = 680;
                const chartHeight = 100;

                const push = (data) => {
                    data.push({
                        id: id++,
                        value: Math.round(Math.random() * chartHeight)
                    })
                }

                for (let i = 0; i < 20; i++) {
                    push(data);
                }

                const  render = (data) => {
                    const selection = d3.select('.animation-multi')
                        .selectAll('.v-bar')
                        .data(data, (d) => {
                            return d.id;
                        })

                    // 进入
                    selection.enter()
                        .append('div')
                        .classed('v-bar', true)
                        .style('height', '0')
                        .style('position', 'fixed')
                        .style('top', chartHeight + 'px')
                        .style("left", function(d, i){
                            return barLeft(i+1) + "px"; // <-B
                        })
                        .append("span");

                    // 更新
                    selection
                        .transition()
                        .duration(duration)
                        .style("top", function (d) {
                            return chartHeight - barHeight(d) + "px";
                        })
                        .style("left", function(d, i){
                            return barLeft(i) + "px";
                        })
                        .style("height", function (d) {
                            return barHeight(d) + "px";
                        })
                        .select("span")
                        .text(function (d) {return d.value;})
                        .style('color', 'red');

                    // 退出
                    selection.exit()
                        .transition().duration(duration) // <-E
                        .style("left", function(d, i){
                            return barLeft(-1) + "px"; //<-F
                        })
                        .remove();
                }

                function barLeft(i) {
                    return i * (30 + 2);
                }
                function barHeight(d) {
                    return d.value;
                }

                render(data)

                setTimeout(() => {
                    render(data);
                }, 10)

                setInterval(function () {
                    data.shift();
                    push(data);
                    render(data);
                }, 2000);

                d3.select("body")
                    .append("div")
                    .attr("class", "baseline")
                    .style("position", "fixed")
                    .style("top", chartHeight + "px")
                    .style("left", "0px")
                    .style("width", chartWidth + "px");
            },
            renderEase () {
                const selector = '.animation-custom';

                const categoryScale = d3.scaleOrdinal(d3.schemeCategory10);

                const data = ['linear', 'cubic', 'cubic-in-out',
                'sin', 'sin-out', 'exp', 'circle', 'back', 'custom'];
                const dataEase = {
                    linear: function (t) {
                        return d3.easeLinear(t);
                    },
                    cubic: function (t) {
                        return d3.easeCubic(t);
                    },
                    'cubic-in-out': function (t) {
                        return d3.easeCubicInOut(t);
                    },
                    'sin': function (t) {
                        return d3.easeSin(t);
                    },
                    'sin-out': function (t) {
                        return d3.easeSinOut(t);
                    },
                    'exp': function (t) {
                        return d3.easeExp(t);
                    },
                    'circle': function (t) {
                        return d3.easeCircle(t);
                    },
                    'back': function (t) {
                        return d3.easeBack(t);
                    },
                    custom: function (t) {
                        return t * t;
                    }
                };


                const classSelector = '.fixed-cell';
                d3.select(selector)
                    .selectAll(classSelector)
                    .data(data)
                    .enter()
                    .append('div')
                    .classed('fixed-cell', true)
                    .style('left', '600px')
                    .style('top', (d, i) => {
                        return (i * 40) + 'px'
                    })
                    .text((d) => {
                        return d;
                    })
                    .style('background-color', (d, i) => {
                        return categoryScale(i);
                    })
                    .style('color', '#fff');

                d3.select(selector)
                    .selectAll(classSelector)
                    .data(data)
                    .exit()
                    .remove();

                d3.select(selector)
                    .selectAll(classSelector)
                    .each(function (d, i) {
                        d3.select(this)
                            .transition()
                            .ease(dataEase[d])
                            .duration(5500)
                            .style('left', '10px');
                    })
            },
            renderTweening () {
                const selector = '.animation-tweening';
                d3.select(selector)
                    .append('div')
                    .append('input')
                    .attr('type', 'button')
                    .attr('class', 'countdown')
                    .attr('value', 0)
                    .style('width', '150px')
                    .transition()
                    .ease(function (t) {
                        return d3.easeLinear(t)
                    })
                    .duration(5000)
                    .style('width', '400px')
                    .attr('value', '9');

                d3.select(selector)
                    .append('div')
                    .append('input')
                    .attr('type', 'button')
                    .attr('class', 'countdown')
                    .attr('value', 0)
                    .style('width', '150px')
                    .transition()
                    .ease(function (t) {
                        return d3.easeLinear(t)
                    })
                    .duration(5000)
                    .styleTween('width', tweenWidth)
                    .attrTween('value', valueWidth);

                function tweenWidth() {

                    const interpolate = d3.scaleQuantize()
                        .domain([0, 1])
                        .range([150, 200, 250, 350, 400])

                    return function (t) {
                        return interpolate(t) + 'px';
                    }
                }

                function valueWidth() {

                    const interpolate = d3.scaleQuantize()
                        .domain([0, 1])
                        .range([1, 2, 3, 4, 5, 6, 7, 8, 9])

                    return function (t) {
                        return interpolate(t);
                    }
                }

            },
            renderLittleBox () {
                const selector = '.little-box';
                const transitionRender = function (s) {
                    s.transition()
                        .duration(300)
                        .style('width', '200px')
                        .style('height', '1px')
                        .transition()
                        .duration(100)
                        .style('left', '600px')
                        .transition()
                        .duration(300)
                        .style('left', '800px')
                        .style('width', '80px')
                        .style('height', '80px')
                }
                transitionRender(d3.select(selector));
            },
            originSet () {
                const selector = '.little-box';
                d3.select(selector)
                    .style('left', 0);
            }
        }
    }
</script>
<style scoped>
.little-box{
    position: fixed;
    left: 0;
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: #2e2e2e;
}
</style>
