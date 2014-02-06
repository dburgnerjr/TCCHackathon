function Controller() {
    function doClick(e) {
        alert(e.source.title);
        "Quit" == e.source.title && $.win.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        backgroundColor: "white",
        fullscreen: "true"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.TCCHackathon = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "TCC Hackathon",
        id: "TCCHackathon",
        top: "10"
    });
    $.__views.win.add($.__views.TCCHackathon);
    $.__views.newgame = Ti.UI.createButton({
        id: "newgame",
        title: "New Game",
        top: "50",
        width: "200",
        height: "50"
    });
    $.__views.win.add($.__views.newgame);
    doClick ? $.__views.newgame.addEventListener("click", doClick) : __defers["$.__views.newgame!click!doClick"] = true;
    $.__views.quit = Ti.UI.createButton({
        id: "quit",
        title: "Quit",
        top: "110",
        width: "200",
        height: "50"
    });
    $.__views.win.add($.__views.quit);
    doClick ? $.__views.quit.addEventListener("click", doClick) : __defers["$.__views.quit!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.open();
    __defers["$.__views.newgame!click!doClick"] && $.__views.newgame.addEventListener("click", doClick);
    __defers["$.__views.quit!click!doClick"] && $.__views.quit.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;