/**
 * Created by jfhuang on 18/1/5.
 */
import '../../skin/default/bar.css';
import * as d3 from 'd3';

const createBar = (selector, options) => {
    const data = options.data;

    const scale = d3.scaleLinear()
        .domain([1,20])
        .range([1, 400]);

    // 进入
    d3.select(selector)
        .selectAll('span')
        .data(data)
        .enter()
        .append('span')
        .classed('fv-bar', true);
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
        .style('width', (item) => {
            return scale(item) + 'px';
        })
};


export default createBar;