/**
 * Created by jfhuang on 18/1/6.
 */
import './style.css';
import fview from '../../../src/index';

export default () => {
    const div = document.createElement('div')
    div.className = 'ex-bar-box';
    document.body.appendChild(div);

    const data = [];
    for (let i = 1; i <= 10; i++) {
        data.push(i);
    }

    fview.createBar('.ex-bar-box', {
        data: data,
        color: 'rgb(198, 198, 46)'
    })
}