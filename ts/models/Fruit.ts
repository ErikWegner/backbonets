
/// <reference path="../../DefinitelyTyped/backbone/backbone.d.ts" />

import Backbone = require("backbone")

class Fruit extends Backbone.Model {
  get_title(): string {
    return this.get("title");
  }
  
  set_title(title: string) {
    this.set("title", title);
  }
}

export = Fruit