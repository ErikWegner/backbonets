/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function (require, exports, Backbone) {
    var FruitItems = (function (_super) {
        __extends(FruitItems, _super);
        function FruitItems() {
            _super.apply(this, arguments);
        }
        return FruitItems;
    })(Backbone.Collection);
    return FruitItems;
});
//# sourceMappingURL=FruitItems.js.map