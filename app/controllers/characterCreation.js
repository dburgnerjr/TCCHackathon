var player = arguments[0] || {}, linkApi = require('linkedInAPI');
$.nameField.value = player.name;

$.btnLaunch.addEventListener('click', function(e){
	
	//Pull information from LinkedIn to get skills
	//var skillXML = Ti.XML.parseString("some string");
	
	//var skillNames = skillXML.getElementsByTagName("name");
	//alert(skillNames);
	
	player.name = $.nameField.value;
	player.save();
	
	Alloy.createController('game',player).getView().open();
	$.characterCreation.close();
});

$.btnCancel.addEventListener('click', function(e){
	$.characterCreation.close();
});

// THESE CALLS WRAP COMMON FUNCTIONS
linkApi.getUser(function(_d) {
    var obj = JSON.parse(_d);
     Ti.API.info(obj);
    $.nameField.value = obj.formattedName;
    player.name = $.nameField.value;
    player.save();
    //Alloy.createController('game',player).getView().open();
	//$.characterCreation.close();
});

Alloy.Globals.liCall = function() {
    linkApi.getUser(function(_d) {
        Ti.API.info(_d);
    });
};

$.characterCreation.open();
