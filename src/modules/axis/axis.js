/**
 * 创建坐标轴工具类
 * 单例
 */
import * as d3 from 'd3';

const transformPos = {
    Top (margin) {
        return `translate(${margin}, ${margin})`
    },
    Left (margin) {
        return transformPos.Top(margin);
    },
    Bottom (margin, height) {
        return `translate(${margin}, ${height - 2 * margin})`
    },
    Right (margin, width) {
        return `translate(${width - 2 * margin}, ${margin})`
    }
};

export default {
    createCategoryAxis (selector, position) {
        // todo
    },
    createValueAxis (selector, position, scale, option) {
        const { width, height, margin, ticks } = option || {};
        const svg = d3.select(selector)
            .append('svg')
            .classed('value-axis', true)
            .attr('width', `${width}px`)
            .attr('height', `${height}px`);

        const axis = d3['axis' + position](scale).ticks(ticks || 5);
        const arg2 = position === 'Bottom' ? height : (position === 'Right' ? width : 0);
        const translate = transformPos[position](margin, arg2);
        svg.append('g')
            .attr('transform', () => {
                return translate;
            })
            .call(axis);

        return svg;
    }
};