var args = arguments[0] || {};

var Entity = require('entity');
var Spells = require('spell');

var player = new Entity(args);
var enemy = new Entity("Evil guy");

function onAttackClick(){
	
	player.attack(enemy);
	
	setTimeout(500);
	enemyTurn();
}

function onDefendClick(){
	
	player.defend();
	
	setTimeout(500);	
	enemyTurn();
}

function enemyTurn(){
	enemy.act(player);
}

$.btnAttack.addEventListener('click', onAttackClick);
$.btnDefend.addEventListener('click', onDefendClick);