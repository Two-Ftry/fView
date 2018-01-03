/**
 * Created by jfhuang on 18/1/3.
 */
import * as d3 from 'd3';
export default {
    methods: {
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
                .style('font', (item) => {
                    return scale1 ? scale1(item) : item;
                })
        }
    }
}
