/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />

import Backbone = require("backbone")
import Fruit = require('../models/Fruit')
import ItemView = require('views/ItemView')

class MasterView extends Backbone.View<Fruit> {
  constructor() {
    super({
      className: 'masterview',
      tagName: 'ul'
    });
  }
  addOne(element: Fruit) {
    var itemview = new ItemView(element)
    this.$el.append(itemview.render().el);
  }
}


export = MasterView
