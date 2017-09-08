/**
 * Created by shawntsia on 2017/9/7.
 */
// 使用面向对象编程实现javascript常用设计模式
;var cai = (function () {

    // 变量定义
    var cai = {};

    // 内部封装函数
    cai.c = function (dom, selector) {
        this.dom = dom;
        this.selector = selector;
    };

    // 初始化函数
    cai.init = function (dom, selector) {
        // 检测数据
        // 固定DOM
        // 返回具有新的方法的集合
        // var dom = [];
        // var selector = '';
        return new cai.c(dom, selector);
    };

    // 外部函数定义
    /**
     *
     * @param dom
     * @param selector
     */
    $ = function (dom, selector) {
        return cai.init(dom, selector)
    };

    /**
     * 扩展函数
     * @type {{constructor: (*), toString: cai.fn.toString}}
     */
    $.fn = {
        constructor: cai.c,
        toString: function () {
        }
    };

    // 工具函数实现

    /**
     * 组合式寄生式继承
     * @param subClass
     * @param superClass
     */
    $.inheritance = function(subClass, superClass) {
        var prototype = Object(superClass.prototype);
        prototype.constructor = subClass;
        subClass.prototype = prototype;
    };

    // 继承扩展函数方法
    cai.c.prototype = $.fn;


    // cmd nodejs支持
    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = $;
        }
        exports.$ = $;
    }

    // amd requirejs 支持
    if (typeof define == 'function' && define.amd) {
        define('cai', [], function() {
            return $;
        });
    }

    // 原生返回
    return $;
})();

// window.cai = cai;
// window.$ === undefined && (window.$ = window.cai);

/**
 * Created by shawntsia on 2017/9/8.
 * 回调管理，对于deffred的支持
 */
(function ($) {
    /**
     * 具体的内部实现
     */
    $.Callbacks = function (options) {
    }
})(cai);

/**
 * Created by shawntsia on 2017/9/8.
 * Deffred对于异步管理的实现
 */
(function ($) {
    $.Deffred = function () {

    };
})(cai);
/**
 * Created by shawntsia on 2017/9/8.
 */
