/**
 * Created by jfhuang on 18/1/6.
 */

import * as d3 from 'd3';

const container = {
    __getContainer (selector) {
        let box;
        if (selector.indexOf('#') !== -1) {
            const s = selector.split('#')[1]
            box = document.getElementById(s);
        } else {
            const s = selector.split('.')[1]
            const eles = document.getElementsByClassName(s);
            box = eles ? eles[0] : null;
        }
        return box;
    },
    getContainerWidth (selector) {
        const box = container.__getContainer(selector);
        if (!box) {
            return;
        }
        const paddingLeft = container.__getStyleValueByKey(box,'paddingLeft');
        const paddingRight = container.__getStyleValueByKey(box,'paddingRight');
        return box.offsetWidth - paddingLeft - paddingRight;
    },
    getContainerHeight (selector) {
        const box = container.__getContainer(selector);
        if (!box) {
            return;
        }
        const paddingTop = container.__getStyleValueByKey(box,'paddingTop');
        const paddingBottom = container.__getStyleValueByKey(box,'paddingBottom');
        return box.offsetHeight - paddingBottom - paddingTop;
    },
    __getStyleValueByKey (ele, key) {
        if (!ele) {
            return;
        }
        const style = window.getComputedStyle(ele, null);
        let val = style[key];
        if (val && val.indexOf('px') !== -1) {
            val = parseFloat(val.split('px')[0])
        }
        return val;
    },
    getCategoryWidth (selector, option, orientation) {
        if (!selector || !option || isNaN(option.count) || !option.count) {
            return -1;
        }
        let w;
        if (orientation === 'horizontal') {
            w = container.getContainerWidth(selector);
        } else {
            w = container.getContainerHeight(selector);
        }
        w -= (option.count - 1) * option.barGraph;
        w /= option.count;
        return w;
    }
};

export const containerUtil = container;