<template>
    <div class="interploate-box">
        <p>interploate</p>
    </div>
</template>

<script>
    import * as d3 from 'd3';
    import renderJs from '../render';
    export default {
        mixins: [renderJs],
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
                for (let i = 1; i <= 10; i++) {
                    this.data.push(i);
                }
                const scale = d3.scaleLinear()
                    .domain(this.data)
                    .range(['italic bold 12px/30px Georgia, serif',
                        'italic bold 120px/180px Georgia, serif']);
                this.render(this.data, scale, '.interploate-box');
            }
        }
    }
</script>
<style scoped>

</style>
