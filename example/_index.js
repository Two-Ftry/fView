/**
 * Created by jfhuang on 18/1/5.
 */

import fview from '../src/index';

document.write('没问题,妥妥的')

const div = document.createElement('div')
div.className = 'box';
document.body.appendChild(div);

const data = [];
for (let i = 1; i <= 20; i++) {
    data.push(i);
}

fview.createBar('.box', {
    data: data
})