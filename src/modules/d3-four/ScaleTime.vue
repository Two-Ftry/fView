<template>
  <div id="time" class="clear">
    <span>Linear Time Progression<br/></span>
    <span>Mapping [01/01/2013,12/31/2013] to [0, 900]</span>
  </div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: '',
    data () {
      return {}
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        const start = new Date(2013, 0, 1) // <-A
        const end = new Date(2013, 11, 31)
        const range = [0, 1200]
        const time = d3.scaleTime().domain([start, end]) // <-B
          .rangeRound(range) // <-C
        const max = 12
        const data = []
        for (var i = 0; i < max; ++i) { // <-D
          var date = new Date(start.getTime())
          date.setMonth(start.getMonth() + i)
          data.push(date)
        }
        this.renderD3(data, time, '#time')
      },
      renderD3 (data, scale, selector) { // <-E
        d3.select(selector).selectAll('div.fixed-cell')
          .data(data)
          .enter()
          .append('div').classed('fixed-cell', true)

        d3.select(selector).selectAll('div.fixed-cell')
          .data(data)
          .exit().remove()

        d3.select(selector).selectAll('div.fixed-cell')
          .data(data)
          .style('margin-left', function (d) { // <-F
            return scale(d) + 'px'
          })
          .html(function (d) { // <-G
            var format = d3.timeFormat('%x') // <-H
            return format(d) + '<br>' + scale(d) + 'px'
          })
      }
    }
  }
</script>
<style scoped>

</style>
