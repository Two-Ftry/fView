<template>
    <div>
        <div class="interploate-box">
            <p>color interploate</p>
        </div>
        <div class="interploate-box2">
            <p>color interploate2</p>
        </div>
    </div>
</template>

<script>
    import * as d3 from 'd3';
    export default {
        name: '',
        data () {
            return {
                data: []
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init () {
                for (let i = 1; i <= 20; i++) {
                    this.data.push(i);
                }
                const scale = d3.scaleLinear()
                    .domain([1,20])
                    .range(['white',
                        '#4169e1']);
                this.render(this.data, scale, '.interploate-box');

                const scale2 = d3.scaleLinear()
                    .domain([1, 10, 20])
                    .range(['white',
                        '#4169e1', 'white']);
                this.render(this.data, scale2, '.interploate-box2');
            },
            render (data, scale1, selector) {
                // 进入
                d3.select(selector)
                    .selectAll('span')
                    .data(data)
                    .enter()
                    .append('span')
                    .classed('cell', true);

                // 退出
                d3.select(selector)
                    .selectAll('span')
                    .data(data)
                    .exit()
                    .remove();

                // 更新
                d3.select(selector)
                    .selectAll('span')
                    .data(data)
                    .text((item) => {
                        return item;
                    })
                    .style('background-color', (item) => {
                        return scale1 ? scale1(item) : item;
                    })
            }
        }
    }
</script>
<style scoped>

</style>
