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
            console.log('@@@@s', s)
            const eles = document.getElementsByClassName(s);
            box = eles ? eles[0] : null;
        }
        return box;
    },
    __getContainerWidth (selector) {
        const box = container.__getContainer(selector);
        if (!box) {
            return;
        }
        return box.offsetWidth;
    },
    __getContainerHeight (selector) {
        const box = container.__getContainer(selector);
        console.log('@@@@box', box)
        if (!box) {
            return;
        }
        return box.offsetHeight;
    },
    getCategoryWidth (selector, count, orientation) {
        if (!selector || isNaN(count) || !count) {
            return -1;
        }
        let w;
        if (orientation === 'horizontal') {
            w = Math.floor(container.__getContainerWidth(selector) / count);
        } else {
            w = Math.floor(container.__getContainerHeight(selector) / count);
        }
        return w;
    }
};

export const containerUtil = container;