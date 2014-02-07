var player = arguments[0] || {};
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

$.characterCreation.open();
