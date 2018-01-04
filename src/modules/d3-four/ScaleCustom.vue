<template>
    <div>
        <div class="interploate-box">
            <p>color interploate</p>
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
                // 自定义插值器
//                d3.interpolators.push(function (a, b) {
//                    var re = /^\$([0-9,.]+)$/;
//                    var ma, mb, f = d3.format(',.02f');
//                    if ((ma = re.exec(a)) && (mb=re.exec(b))) {
//                        a = parseFloat(ma[1]);
//                        b = parseFloat(mb[1]) - a;
//                        return function (t) {
//                            return '$' + f(a + b * t);
//                        }
//                    }
//                })

                for (let i = 0; i < 11; ++i) {
                    this.data.push(i);
                }
                const scale = d3.scaleLinear()
                    .domain([0,11])
                    .range(['$0',
                        '$300']);
                this.render(this.data, scale, '.interploate-box');
            },
            render (data, scale1, selector) {
                var f = d3.format(',.02f');
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
                    });
            }
        }
    }
</script>
<style scoped>

</style>
