function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "game";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.game = Ti.UI.createWindow({
        backgroundColor: "#000",
        id: "game"
    });
    $.__views.game && $.addTopLevelView($.__views.game);
    $.__views.__alloyId0 = Ti.UI.createView({
        top: 0,
        height: "75%",
        width: Ti.UI.FILL,
        id: "__alloyId0"
    });
    $.__views.game.add($.__views.__alloyId0);
    $.__views.turnOrder = Ti.UI.createView({
        width: "20%",
        left: 0,
        height: Ti.UI.FILL,
        backgroundColor: "red",
        id: "turnOrder"
    });
    $.__views.__alloyId0.add($.__views.turnOrder);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        color: "#fff",
        text: "Turn Order",
        id: "__alloyId1"
    });
    $.__views.turnOrder.add($.__views.__alloyId1);
    $.__views.gameArea = Ti.UI.createView({
        id: "gameArea"
    });
    $.__views.__alloyId0.add($.__views.gameArea);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        color: "#fff",
        text: "Game Area",
        id: "__alloyId2"
    });
    $.__views.gameArea.add($.__views.__alloyId2);
    $.__views.actionsContainer = Ti.UI.createView({
        bottom: 0,
        height: "25%",
        width: Ti.UI.FILL,
        backgroundColor: "#333",
        id: "actionsContainer"
    });
    $.__views.game.add($.__views.actionsContainer);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#fff",
        text: "Actions Container",
        id: "__alloyId3"
    });
    $.__views.actionsContainer.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;