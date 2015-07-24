/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />

import Backbone = require("backbone")
import Fruit = require('../models/Fruit')

class FruitItems extends Backbone.Collection<Fruit> {
}

export = FruitItems
