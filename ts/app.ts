/// <reference path="../DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../DefinitelyTyped/jquery/jquery.d.ts" />
/// <amd-dependency path="backbone" />
import Fruit = require("./model")
import MasterView = require("ts/view")
import $ = require("jquery")

var masterview = new MasterView()
$('body').append(masterview.$el);
