var args = arguments[0] || {};

var Entity = require('entity');
var Spells = require('spell');

var player = new Entity(args);
player.addSpell(Spells.ThrowResumeSpell);
var enemy = new Entity("Evil guy");
player.addSpell(Spells.ThrowApplicationSpell);

function onAttackClick(e){
	player.attack(enemy);
	
	setTimeout(enemyTurn, 500);
}

function onDefendClick(e){
	
	e.source.backgroundImage = "images/defendPrs.jpg";
	
	player.defend();
	
	e.source.backgroundImage = "images/defendBtn.jpg";
	
	setTimeout(enemyTurn, 500);
}

function enemyTurn(){
	enemy.act(player);
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
//$.btnDefend.addEventListener('click', onDefendClick);
$.pb.show();