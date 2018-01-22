<template>
    <div class="descartes-box">
        <p>坐标系</p>
        <div>
            <button @click="rescale">rescale</button>
        </div>
    </div>
</template>

<script>
    import * as d3 from 'd3';
    export default {
        name: '',
        data () {
            return {
                svg: null,
                width: 500,
                height: 500,
                margin: 25,
                scaleX: null,
                scaleY: null,
                axisX: null,
                axisY: null
            }
        },
        mounted () {
            this.render();
        },
        methods: {
            render () {
                this.svg = d3.select('.descartes-box')
                    .append('svg')
                    .attr('width', `${this.width}px`)
                    .attr('height', `${this.height}px`);

                this.renderYAxis();
                this.renderXAxis();

                this.renderXGridLine();
                this.renderYGridLine();
            },
            renderXAxis () {
                this.scaleX = d3.scaleLinear()
                    .domain([0, 200])
                    .range([0, this.width - 2 * this.margin]);
                this.axisX = d3.axisBottom(this.scaleX).ticks(5);
                this.svg.append('g')
                    .classed('axis-x', true)
                    .attr('transform', () => {
                        return `translate(${this.margin}, ${this.height - this.margin})`;
                    })
                    .call(this.axisX);
            },
            renderYAxis () {
                this.scaleY = d3.scaleLinear()
                    .domain([200, 0])
                    .range([0, this.height - 2 * this.margin]);
                this.axisY = d3.axisLeft(this.scaleY).ticks(5);

                this.svg.append('g')
                    .classed('axis-y', true)
                    .attr('transform', `translate(${this.margin}, ${this.margin})`)
                    .call(this.axisY);
            },
            renderXGridLine () {
                d3.selectAll('.axis-x .tick')
                    .select('.grid-line')
                    .remove();

                d3.selectAll('.axis-x .tick')
                    .append('line')
                    .classed('grid-line', true)
                    .attr('x1', 0)
                    .attr('y1', 0)
                    .attr('x2', 0)
                    .attr('y2', 2 * this.margin - this.width)
                    .style('stroke', '#eee')
            },
            renderYGridLine () {
                d3.selectAll('.axis-y .tick')
                    .select('.grid-line')
                    .remove();
                d3.selectAll('.axis-y .tick')
                    .append('line')
                    .classed('grid-line', true)
                    .attr('x1', 0)
                    .attr('y1', 0)
                    .attr('x2', this.height - 2 * this.margin)
                    .attr('y2', 0)
                    .style('stroke', '#eee')
            },
            rescale () {
                if (this.axisX) {
                    const maxX = Math.ceil(Math.random() * 100);
                    this.axisX.scale().domain([0, maxX]);
                    this.svg.select('g.axis-x')
                        .transition()
                        .call(this.axisX);
                    this.renderXGridLine();
                }
                if (this.axisY) {
                    const maxY = Math.ceil(Math.random() * 100);
                    this.axisY.scale().domain([maxY, 0]);
                    this.svg.select('g.axis-y')
                        .transition()
                        .call(this.axisY);
                    this.renderYGridLine();
                }
            }
        }
    }
</script>
<style scoped>

</style>
