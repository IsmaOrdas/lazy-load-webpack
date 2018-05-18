webpackJsonp([0],{

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LazyComponent = exports.LazyComponent = function () {
    function LazyComponent(component) {
        _classCallCheck(this, LazyComponent);

        this.el = component;
        this.init();
    }

    _createClass(LazyComponent, [{
        key: "event",
        value: function event() {
            this.el.addEventListener("click", function () {
                console.log("Click detected!");
            });
        }
    }, {
        key: "init",
        value: function init() {
            this.el.classList.add("active");
            this.el.innerHTML = "Component active. Click me and see the console.";
            this.event();
        }
    }]);

    return LazyComponent;
}();

/***/ })

});