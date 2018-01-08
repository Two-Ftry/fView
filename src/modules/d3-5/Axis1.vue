<template>
    <div>
        <div class="axis-box" ref="axisbox">
            <p>坐标轴</p>
            <div>
                <button @click="renderAxis('axisTop')">Top</button>
                <button @click="renderAxis('axisRight')">Right</button>
                <button @click="renderAxis('axisBottom')">Bottom</button>
                <button @click="renderAxis('axisLeft')">Left</button>
            </div>
        </div>
        <div>
            <descartes></descartes>
        </div>
    </div>
</template>

<script>
    import * as d3 from 'd3';
    import Descartes from './Descartes.vue';
    export default {
        components: {
            Descartes
        },
        name: '',
        data () {
            return {
                svg: null,
                scale: null
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init () {
//                this.createSvg();

                this.scale = d3.scaleLinear()
                    .domain([0, 200])
                    .range([0,400])

                this.renderAxis();
            },
            renderAxis (orient) {
                if (this.svg) {
                    this.svg.remove();
                }
                this.createSvg()
                orient = orient || 'axisLeft';
                const scale = this.scale;
                var axis = d3[orient](scale).ticks(5);
                this.svg.append('g')
                    .attr('transform', () => {
                        return 'translate(25, 25)'
                    })
                    .call(axis);
            },
            createSvg () {
                this.svg = d3.select('.axis-box')
                    .append('svg')
                    .classed('axis', true)
                    .style('width', '500px')
                    .style('height', '500px');
            }
        }
    }
</script>
<style scoped>

</style>
