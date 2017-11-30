/**
 * Created by jfhuang on 17/11/29.
 */



function render (data, category) {
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
            return (d.expense * 3) + 'px';
        })
        .select('span')
        .text(function (d) {
            return d.expense;
        });

    // 退出
    d3.select('body').selectAll('.h-bar')
        .data(data)
        .exit()
        .remove();

    // 选中
    d3.select('body').selectAll('.h-bar')
        .data(data)
        .filter(function(d) {
            return d.category === category;
        })
        .classed('selected', true)

    // 还原
    d3.select('body').selectAll('.h-bar')
        .data(data)
        .filter(function(d) {
            return d.category !== category;
        })
        .classed('selected', false)

    d3.select('body').selectAll('.h-bar')
        .sort(function (a, b) {
            return a.expense < b.expense ? -1 : 1;
        })

}

var data = [
    {expense: 10, category: 'Retail'},
    {expense: 15, category: 'Gas'},
    {expense: 30, category: 'Retail'},
    {expense: 50, category: 'Dining'},
    {expense: 80, category: 'Gas'},
    {expense: 65, category: 'Retail'},
    {expense: 55, category: 'Gas'},
    {expense: 30, category: 'Dining'},
    {expense: 20, category: 'Retail'},
    {expense: 10, category: 'Dining'},
    {expense: 8, category: 'Gas'}
];

render(data);