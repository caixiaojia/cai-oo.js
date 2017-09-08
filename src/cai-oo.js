/**
 * Created by shawntsia on 2017/9/7.
 */
// 使用面向对象编程实现javascript常用设计模式
;var cai = (function () {
    //Parasitic inheritance 组合式继承
    function inheritance(subClass, superClass) {
        var p = object(superClass.prototype);
        p.constructor = subClass;
        subClass.prototype = p;
    }
})();

window.cai = cai;
window.$ === undefined && (window.$ = window.cai);
