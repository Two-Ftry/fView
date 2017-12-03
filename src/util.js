/**
 * Created by jfhuang on 17/12/3.
 */

var util = (function (d3) {

    var isArray = function (data) {
        return Object.prototype.toString.call(data) === '[object Array]'
    };

    var isFunc = function (data) {
        return Object.prototype.toString.call(data) === '[object Function]';
    };

    var isObject = function (data) {
        return Object.prototype.toString.call(data) === '[object Object]';
    };

    var isNumber = function (data) {
        return Object.prototype.toString.call(data) === '[object Number]';
    };

    return {
        isArray: isArray,
        isFunc: isFunc,
        isObject: isObject
    };

})(d3);