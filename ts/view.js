/// <reference path="../DefinitelyTyped/backbone/backbone.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function (require, exports, Backbone) {
    var MasterView = (function (_super) {
        __extends(MasterView, _super);
        function MasterView() {
            _super.call(this, {
                className: 'masterview',
                tagName: 'ul'
            });
        }
        return MasterView;
    })(Backbone.View);
    return MasterView;
});
