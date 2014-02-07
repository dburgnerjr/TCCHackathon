var Entity = require('entity');

$.btnLaunch.addEventListener('click', function(e){
	
	//var skillXML = Ti.XML.parseString("some string");
	
	//var skillNames = skillXML.getElementsByTagName("name");
	//alert(skillNames);
	
	var player = new Entity.Player($.nameField.value, /*skillNames*/["HTML", "C++"]);
	
	Alloy.createController('game',player).getView().open();
	$.characterCreation.close();
});

$.btnCancel.addEventListener('click', function(e){
	$.characterCreation.close();
});

$.characterCreation.open();
