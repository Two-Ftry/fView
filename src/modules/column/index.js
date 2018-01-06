/**
 * Created by jfhuang on 18/1/5.
 */
import '../../skin/default/column.css';
import * as d3 from 'd3';
import { containerUtil } from '../../common/container';

import config from './config';

const createColumn = (selector, options) => {
    const data = options.data;

    // 预处理
    if (!data) {
        return;
    }
    options = Object.assign({}, config, options);
    const columnGrap = options.columnGrap;
    // 获取条形大小
    const w = containerUtil.getCategoryWidth(selector, {
        count: data.length,
        grap: columnGrap
    }, 'horizontal');

    // 尺度处理
    const min = d3.min(data);
    const max = d3.max(data);
    const boxHeight = containerUtil.getContainerHeight(selector);
    const scale = d3.scaleLinear()
        .domain([min, max])
        .range([min, boxHeight]);

    // 进入
    d3.select(selector)
        .selectAll('span')
        .data(data)
        .enter()
        .append('span')
        .classed('fv-column', true);
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
        .style('height', (item) => {
            return scale(item) + 'px';
        })
        .style('margin-left', (item, index) => {
            if (index === 0) {
                return 0;
            }
            return columnGrap + 'px';
        })
        .style('width', w + 'px')
        .style('background-color', options.color);
};


export default createColumn;