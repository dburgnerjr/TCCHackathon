var player = arguments[0] || {}, linkApi = require('linkedInAPI');
$.nameField.value = player.name;
$.skillsField.value = player.skills.join(", ");

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
    var skls = [];
    _.each(obj.skills.values, function(skill){
    	Ti.API.info("skill", skill);
    	skls.push(skill.skill.name);
    });
    
    player.skills = skls;
    $.skillsField.value = player.skills.join(", ");
    player.name = $.nameField.value;
    player.save();
    //Alloy.createController('game',player).getView().open();
	//$.characterCreation.close();
});

$.characterCreation.open();
