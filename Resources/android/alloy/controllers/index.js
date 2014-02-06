function Controller() {
    function newGameClick() {
        alert("New Game Clicked");
    }
    function quitGameClick() {
        $.index.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "gray",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.titleLabel = Ti.UI.createLabel({
        top: 150,
        color: "#999",
        text: "TCC Hackathon",
        id: "titleLabel"
    });
    $.__views.index.add($.__views.titleLabel);
    $.__views.newGameButton = Ti.UI.createButton({
        width: 150,
        height: 50,
        top: 225,
        id: "newGameButton",
        title: "New Game"
    });
    $.__views.index.add($.__views.newGameButton);
    newGameClick ? $.__views.newGameButton.addEventListener("click", newGameClick) : __defers["$.__views.newGameButton!click!newGameClick"] = true;
    $.__views.quitGameButton = Ti.UI.createButton({
        width: 150,
        height: 50,
        top: 325,
        id: "quitGameButton",
        title: "Quit Game"
    });
    $.__views.index.add($.__views.quitGameButton);
    quitGameClick ? $.__views.quitGameButton.addEventListener("click", quitGameClick) : __defers["$.__views.quitGameButton!click!quitGameClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.newGameButton!click!newGameClick"] && $.__views.newGameButton.addEventListener("click", newGameClick);
    __defers["$.__views.quitGameButton!click!quitGameClick"] && $.__views.quitGameButton.addEventListener("click", quitGameClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;