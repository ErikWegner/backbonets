/// <reference path="../DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../DefinitelyTyped/jquery/jquery.d.ts" />
/// <amd-dependency path="backbone" />
import Fruit = require("models/Fruit")
import FruitItems = require("collections/FruitItems")
import MasterView = require("views/MasterView")
import ItemView = require("views/ItemView")
import $ = require("jquery")

var masterview = new MasterView()
$('body').append(masterview.$el);

var items = new FruitItems();
masterview.listenTo(items, "add", masterview.addOne);

items.add(new Fruit({ id: 17, title: 'Apfel'}))
items.add(new Fruit({ id: 23, title: 'Birne'}))
items.add(new Fruit({ id: 42, title: 'Orange'}))
