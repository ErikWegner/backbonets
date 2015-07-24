/// <reference path="../DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../DefinitelyTyped/jquery/jquery.d.ts" />
/// <amd-dependency path="backbone" />
import Fruit = require("models/Fruit")
import MasterView = require("views/MasterView")
import ItemView = require("views/ItemView")
import $ = require("jquery")

var masterview = new MasterView()
$('body').append(masterview.$el);

var d: Array<Fruit> = []
d.push(new Fruit({ id: 17, title: 'Apfel'}))
d.push(new Fruit({ id: 23, title: 'Birne'}))
d.push(new Fruit({ id: 42, title: 'Orange'}))

_.each(d, function(element, index, list) { 
  var itemview = new ItemView()
  itemview.initialize({ data: element });
  masterview.$el.append(itemview.render().el);
});