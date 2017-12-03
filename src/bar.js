/**
 * Created by jfhuang on 17/12/3.
 */

var util = {};

var createBar = (function (d3, util) {

    /**
     * 创建条形图
     * @param option
     * {
     *      selector: '', // 容器选择器
     *      barSelector: '.fv-bar', // 条形选择器,默认值".fv-bar"
     * }
     */

    const defaultOption = {
        selector: 'body',
        barSelector: '.fv-bar'
    };

    function createBar(option) {
        // 进入
        d3.select(option.selector)
            .selectAll(option.barSelector)
            .data(option.data)
            .enter()
            .append('div')
            .classed(option.barSelector, true);

        // 更新
        d3.select(option.selector)
            .selectAll(option.barSelector)
            .data(option.data)
            .style('width', function(d){
                return d + 'px';
            })
            .text(function (d) {
                return d;
            })
        // 退出
        d3.select(option.selector)
            .selectAll(option.barSelector)
            .data(option.data)
            .exit()
            .remove();
    }
    return createBar;
})(d3, util);