/**
 * Created by jfhuang on 18/1/5.
 */
import '../../skin/default/bar.css';
import * as d3 from 'd3';
import { containerUtil } from '../../common/container';

const createBar = (selector, options) => {
    const data = options.data;

    // 预处理
    if (!data) {
        return;
    }
    // 获取条形大小
    const w = containerUtil.getCategoryWidth(selector, data.length, 'vertical');

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
        .style('height', w + 'px');
};


export default createBar;