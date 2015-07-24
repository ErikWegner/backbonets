/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function (require, exports, Backbone) {
    var ItemView = (function (_super) {
        __extends(ItemView, _super);
        function ItemView() {
            _super.call(this, {
                className: 'backboneitem',
                tagName: 'li'
            });
        }
        ItemView.prototype.initialize = function (options) {
            this.template = _.template('<a href' + '="show?' + 'ID=<%= id %>"><%= title %></a>');
            if (options.data) {
                this.data = options.data.toJSON();
            }
        };
        ItemView.prototype.render = function () {
            this.$el.html(this.template(this.data));
            return this;
        };
        return ItemView;
    })(Backbone.View);
    return ItemView;
});
//# sourceMappingURL=ItemView.js.map