/**
 * Created by jfhuang on 17/11/28.
 */

function SimpleWidget (spec) {
    var instance = {};
    var headline = '';
    var description = '';
    // 渲染
    instance.render = function () {
        var box = d3.select('body').append('div');
        box.append('h3').text(headline);
        box.attr('class', 'box')
            .style('color', spec.color)
            .append('p')
            .text(description);
        return instance;
    };

    // 定义headline
    instance.headline = function (h) {
        headline = h;
        return instance;
    };

    // 定义headline
    instance.description = function (d) {
        description = d;
        return instance;
    };

    return instance;
}

var widget = new SimpleWidget({
    color: 'green'
});

widget.headline('title').description('这里在测试d3的链式调用').render();