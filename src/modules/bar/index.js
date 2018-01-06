/**
 * Created by jfhuang on 18/1/5.
 */
import '../../skin/default/bar.css';
import * as d3 from 'd3';
import { containerUtil } from '../../common/container';

import config from './config';

const createBar = (selector, options) => {
    const data = options.data;

    // 预处理
    if (!data) {
        return;
    }
    options = Object.assign({}, config, options);
    const barGrap = options.barGrap;
    // 获取条形大小
    const w = containerUtil.getCategoryWidth(selector, {
        count: data.length,
        grap: barGrap
    }, 'vertical');

    // 尺度处理
    const min = d3.min(data);
    const max = d3.max(data);
    const boxWidth = containerUtil.getContainerWidth(selector);
    const scale = d3.scaleLinear()
        .domain([min, max])
        .range([min, boxWidth]);

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
            if (options.text.isShow) {
                return item;
            }
            return null;
        })
        .style('width', (item) => {
            return scale(item) + 'px';
        })
        .style('margin-top', (item, index) => {
            if (index === 0) {
                return 0;
            }
            return barGrap + 'px';
        })
        .style('height', w + 'px')
        .style('background-color', options.color);
};


export default createBar;