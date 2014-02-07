var args = arguments[0] || {};

var Entity = require('entity');

var player = args;

$.skillList.data = player.skills;

function onAttackClick(e){
	var result = player.useSkill(e.row.title);
	//Successful attack
	if(result > 0)
	{
		SkillSuccessful();
	}
	//Unsuccessful attack
	else
	{
		SkillUnsuccessful();
	}
}

function SkillSuccessful(){
	
}

function SkillUnsuccessful(){
	
}

$.btnPickSkill.addEventListener('click', function(e){
	$.skillList.animate({
		top: 20,
		duration: 300
	});
});
$.skillList.addEventListener('click', function(e){
	$.skillList.animate({
		top: "70%",
		duration: 300
	});
	$.btnPickSkill.title = e.row.title;
	$.btnAttack.touchEnabled = true;
	$.btnAttack.backgroundColor = 'red';
});
$.btnAttack.addEventListener('click', onAttackClick);
