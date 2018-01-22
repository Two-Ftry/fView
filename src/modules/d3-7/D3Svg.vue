<template>
  <div class="svg-box">
      <div class="svg-box1">

      </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
export default {
    mounted () {
        this.renderSimpleSvg();
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
                .attr('y2', 100);

            console.log('@@@');
        }
    }
}
</script>

<style>

</style>
