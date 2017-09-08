/**
 * Created by shawntsia on 2017/9/8.
 */
;(function(){
    var $ = typeof require === 'function' ? require('../src/cai') : cai;

    QUnit.module('Tools');

    QUnit.test('inheritance', function (assert) {
        var subClass = function(){};
        var superClass = function(){
            this.name = 'super';
        };
        superClass.prototype.sayName = function () {
            return this.name;
        };
        $.inheritance(subClass, superClass);
        assert.ok(new subClass instanceof superClass, 'Inheritance successful!');
    });

})();
