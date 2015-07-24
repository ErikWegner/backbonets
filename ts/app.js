define(["require", "exports", "ts/view", "jquery", "backbone"], function (require, exports, MasterView, $) {
    var masterview = new MasterView();
    $('body').append(masterview.$el);
});
