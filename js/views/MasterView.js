/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone", 'views/ItemView'], function (require, exports, Backbone, ItemView) {
    var MasterView = (function (_super) {
        __extends(MasterView, _super);
        function MasterView() {
            _super.call(this, {
                className: 'masterview',
                tagName: 'table'
            });
        }
        MasterView.prototype.addOne = function (element) {
            var itemview = new ItemView(element);
            this.$el.append(itemview.render().el);
        };
        return MasterView;
    })(Backbone.View);
    return MasterView;
});
//# sourceMappingURL=MasterView.js.map