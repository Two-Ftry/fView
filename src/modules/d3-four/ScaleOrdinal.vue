<template>
    <div class="ordinal-box">
        <div class="ordinal-letter-a">
            <p>[1..10] to ['a', 'j']</p>
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
        methods: {
            init () {
                for (let i = 0; i < 10; ++i) {
                    this.data.push(i);
                }
            },
            render (data) {
                // 进入
                d3.select('.ordinal-letter-a')
                    .selectAll('span')
                    .data(data)
                    .enter()
                    .append('span');

            }
        }
    }
</script>
<style scoped>

</style>
