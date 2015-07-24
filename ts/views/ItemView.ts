/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />

import Backbone = require("backbone")
import Fruit = require('../models/Fruit')

class ItemView extends Backbone.View<Fruit> {
  data: Fruit
  template: (...data: any[]) => string
  constructor() {
    super({
      className: 'backboneitem',
      tagName: 'li',
    });
  }
  
    initialize(options?: any) {
      this.template = _.template('<a href' + '="show?' + 'ID=<%= id %>"><%= title %></a>')
        if (options.data) {
            this.data = options.data.toJSON();
        }
    }
     
    render() {
        this.$el.html(this.template(this.data));
        return this;
    }

}

export = ItemView
