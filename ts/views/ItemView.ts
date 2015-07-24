/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />

import Backbone = require("backbone")
import Fruit = require('../models/Fruit')

class ItemView extends Backbone.View<Fruit> {
  data: Fruit
  template: (...data: any[]) => string
  
  constructor(fruit: Fruit) {
    super({
      className: 'backboneitem',
      tagName: 'li',
    });
    this.initialize(fruit);
  }
  
  initialize(fruit?: any) {
    this.template = _.template('<a href' + '="show?' + 'ID=<%= id %>"><%= title %></a>')
    if (fruit) {
      this.data = fruit;
    }
  }

  render() {
    this.$el.html(this.template(this.data.toJSON()));
    return this;
  }

}

export = ItemView
