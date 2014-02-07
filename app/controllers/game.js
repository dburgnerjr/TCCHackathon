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

$.btnAttack.addEventListener('click', onAttackClick);
$.btnDefend.addEventListener('click', onDefendClick);