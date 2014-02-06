function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        backgroundImage: "images/gameBG.jpg",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.btnNewGame = Ti.UI.createButton({
        width: 100,
        height: 40,
        backgroundColor: "red",
        borderRadius: 5,
        color: "#fff",
        bottom: 175,
        right: 20,
        id: "btnNewGame",
        title: "New Game"
    });
    $.__views.index.add($.__views.btnNewGame);
    $.__views.btnExit = Ti.UI.createButton({
        width: 100,
        height: 40,
        backgroundColor: "red",
        borderRadius: 5,
        color: "#fff",
        bottom: 125,
        right: 20,
        id: "btnExit",
        title: "Exit"
    });
    $.__views.index.add($.__views.btnExit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.btnNewGame.addEventListener("click", function() {
        Alloy.createController("characterCreation").getView().open();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;