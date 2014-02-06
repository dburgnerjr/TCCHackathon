var args = arguments[0] || {};

var Entity = require('entity');
var Spells = require('spell');

var player = new Entity(args);
var enemy = new Entity("Evil guy");

function onAttackClick(e){
	
	e.source.backgroundImage = "images/attackPrs.jpg";
	
	player.attack(enemy);
	
	e.source.backgroundImage = "images/attackBtn.jpg";
	
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