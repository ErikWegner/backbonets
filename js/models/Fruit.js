/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function (require, exports, Backbone) {
    var Fruit = (function (_super) {
        __extends(Fruit, _super);
        function Fruit() {
            _super.apply(this, arguments);
        }
        Fruit.prototype.get_title = function () {
            return this.get("title");
        };
        Fruit.prototype.set_title = function (title) {
            this.set("title", title);
        };
        return Fruit;
    })(Backbone.Model);
    return Fruit;
});
//# sourceMappingURL=Fruit.js.map