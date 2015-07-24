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
        function ItemView(fruit) {
            _super.call(this, {
                className: 'backboneitem',
                tagName: 'tr',
                model: fruit
            });
            this.initialize(fruit);
        }
        ItemView.prototype.events = function () {
            return {
                "click .delete": "clickOnDelete",
                "click .edit": "clickOnEdit"
            };
        };
        ItemView.prototype.initialize = function (fruit) {
            this.template = _.template('<td><span class="edit">✏</span></td><td><span class="show"><%= title %></span></td><td><span class="delete">✗</span></td>');
            this.listenTo(this.model, "remove", this.remove);
            this.listenTo(this.model, "change:title", this.render);
        };
        ItemView.prototype.render = function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        };
        ItemView.prototype.clickOnDelete = function () {
            if (confirm("Remove " + this.model.get_title() + "?")) {
                this.model.collection.remove(this.model);
            }
        };
        ItemView.prototype.clickOnEdit = function () {
            var newtitle = prompt("New title", this.model.get_title());
            if (newtitle != null && newtitle != "") {
                this.model.set_title(newtitle);
            }
        };
        return ItemView;
    })(Backbone.View);
    return ItemView;
});
//# sourceMappingURL=ItemView.js.map