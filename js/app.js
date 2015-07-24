define(["require", "exports", "models/Fruit", "collections/FruitItems", "views/MasterView", "jquery", "backbone"], function (require, exports, Fruit, FruitItems, MasterView, $) {
    var masterview = new MasterView();
    var items = new FruitItems();
    var bbadd = function () {
        var title = prompt("Neuer Titel?");
        if (title != "" && title != null) {
            items.add(new Fruit({ id: (new Date).getTime(), title: title }));
        }
    };
    var addLink = $('<a href="javascript:void(0);">+</a>');
    addLink.on('click', bbadd);
    $('body').append(masterview.$el).append(addLink);
    masterview.listenTo(items, "add", masterview.addOne);
    items.add(new Fruit({ id: 17, title: 'Apfel' }));
    items.add(new Fruit({ id: 23, title: 'Birne' }));
    items.add(new Fruit({ id: 42, title: 'Orange' }));
});
//# sourceMappingURL=app.js.map