/**
 * 创建坐标轴工具类
 * 单例
 */
import * as d3 from 'd3';
export default {
    createCategoryAxis (selector, position) {

    },
    createValueAxis (selector, position, scale) {
        const svg = d3.select(selector)
            .append('svg')
            .classed('value-axis', true)
            .attr('width', '600px')
            .attr('height', '300px');

        const axis = d3['axis' + position](scale).ticks(5);
        svg.append('g')
            .attr('transform', () => {
                return 'translate(25, 25)'
            })
            .call(axis);

        return svg;
    }
};