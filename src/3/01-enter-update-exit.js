/**
 * Created by jfhuang on 17/11/29.
 */



function render (data) {
    // 进入
    d3.select('body').selectAll('.h-bar')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'h-bar')
        .append('span');

    // 更新
    d3.select('body').selectAll('.h-bar')
        .data(data)
        .style('width', function (d) {
            return (d * 3) + 'px';
        })
        .select('span')
        .text(function (d) {
            return d;
        });

    // 退出
    d3.select('body').selectAll('.h-bar')
        .data(data)
        .exit()
        .remove();

}

var data = [10, 20, 30, 40, 50, 40, 45];

setInterval(function () {
    data.shift();
    data.push(Math.floor(Math.random()*100))
    render(data);
}, 1500)
render(data);