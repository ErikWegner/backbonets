/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />

import Backbone = require("backbone")
import Fruit = require('../models/Fruit')

class MasterView extends Backbone.View<Fruit> {
  constructor() {
    super({
      className: 'masterview',
      tagName: 'ul'
    });
  }
}

export = MasterView
