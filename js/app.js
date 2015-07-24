define(["require", "exports", "models/Fruit", "collections/FruitItems", "views/MasterView", "jquery", "backbone"], function (require, exports, Fruit, FruitItems, MasterView, $) {
    var masterview = new MasterView();
    $('body').append(masterview.$el);
    var items = new FruitItems();
    masterview.listenTo(items, "add", masterview.addOne);
    items.add(new Fruit({ id: 17, title: 'Apfel' }));
    items.add(new Fruit({ id: 23, title: 'Birne' }));
    items.add(new Fruit({ id: 42, title: 'Orange' }));
});
//# sourceMappingURL=app.js.map