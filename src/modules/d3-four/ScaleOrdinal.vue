<template>
    <div class="ordinal-box">
        <div class="ordinal-letter-a">
            <p>[1..10] to ['a', 'j']</p>
        </div>
        <div class="clear"></div>
        <div class="ordinal-color-10">
            <p>[1..10] to category 10 color</p>
        </div>
        <div class="clear"></div>
        <div class="ordinal-color-20">
            <p>[1..10] to category 20 color</p>
        </div>
        <div class="clear"></div>
        <div class="ordinal-color-20b">
            <p>[1..10] to category 20b color</p>
        </div>
        <div class="clear"></div>
        <div class="ordinal-color-20c">
            <p>[1..10] to category 20c color</p>
        </div>
    </div>
</template>

<script>
    import * as d3 from 'd3';
    export default {
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
                for (let i = 0; i < 10; ++i) {
                    this.data.push(i);
                }
                // 映射到字符串
                const ordinalScale = d3.scaleOrdinal()
                    .domain(this.data)
                    .range(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])
                this.render(this.data, ordinalScale, '.ordinal-letter-a');

                // 映射10个颜色
                const color10 = d3.scaleOrdinal(d3.schemeCategory10);
                this.render(this.data, color10, '.ordinal-color-10');

                // 映射20个颜色
                const color20 = d3.scaleOrdinal(d3.schemeCategory20);
                this.render(this.data, color20, '.ordinal-color-20');

                // 映射20个颜色b
                const color20b = d3.scaleOrdinal(d3.schemeCategory20b);
                this.render(this.data, color20b, '.ordinal-color-20b');

                // 映射20个颜色c
                const color20c = d3.scaleOrdinal(d3.schemeCategory20c);
                this.render(this.data, color20c, '.ordinal-color-20c');

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
                        return scale1 ? scale1(item) : item;
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
