/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />

import Backbone = require("backbone")
import Fruit = require('../models/Fruit')

class ItemView extends Backbone.View<Fruit> {
  template: (...data: any[]) => string

  constructor(fruit: Fruit) {
    super({
      className: 'backboneitem',
      tagName: 'tr',
      model: fruit
    });
    this.initialize(fruit);
  }

  events() {
    return {
     "click .delete": "clickOnDelete",
     "click .edit"  : "clickOnEdit"
    };
  }

  initialize(fruit?: any) {
    this.template = _.template('<td><span class="edit">✏</span></td><td><span class="show"><%= title %></span></td><td><span class="delete">✗</span></td>')

    this.listenTo(this.model, "remove", this.remove);
    this.listenTo(this.model, "change:title", this.render);
  }

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

  clickOnDelete() {
    if (confirm("Remove " + this.model.get_title() + "?")) {
      this.model.collection.remove(this.model);
    }
  }

  clickOnEdit() {
    var newtitle = prompt("New title", this.model.get_title());
    if (newtitle != null && newtitle != "") {
      this.model.set_title(newtitle);
    }
  }
}

export = ItemView
