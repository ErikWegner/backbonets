define(["require", "exports", "ts/models/Fruit", "ts/views/MasterView", "ts/views/ItemView", "jquery", "backbone"], function (require, exports, Fruit, MasterView, ItemView, $) {
    var masterview = new MasterView();
    $('body').append(masterview.$el);
    var d = [];
    d.push(new Fruit({ id: 17, title: 'Apfel' }));
    d.push(new Fruit({ id: 23, title: 'Birne' }));
    d.push(new Fruit({ id: 42, title: 'Orange' }));
    _.each(d, function (element, index, list) {
        var itemview = new ItemView();
        itemview.initialize({ data: element });
        masterview.$el.append(itemview.render().el);
    });
});
//# sourceMappingURL=app.js.map