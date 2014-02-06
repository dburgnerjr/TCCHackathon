function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "characterCreation";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.characterCreation = Ti.UI.createWindow({
        backgroundColor: "brown",
        id: "characterCreation"
    });
    $.__views.characterCreation && $.addTopLevelView($.__views.characterCreation);
    $.__views.nameField = Ti.UI.createTextField({
        id: "nameField"
    });
    $.__views.characterCreation.add($.__views.nameField);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;