var args = arguments[0] || {};

var Entity = require('entity');
var Spells = require('spell');

var player = new Entity(args);
var enemy = new Entity("Evil guy");

player.addSpell(new Spells.AttackSpell());
player.addSpell(new Spells.DefendSpell());
enemy.addSpell(new Spells.AttackSpell());
enemy.addSpell(new Spells.DefendSpell());

function onAttackClick(){
	for(var i = 0; i < this.spells.length; ++i)
	{
		if(this.spells[i] instanceof Spells.AttackSpell)
		{
			this.spells[i].effect(this, enemy);
		}
	}
	
	enemyTurn();
}

function onDefendClick(){
	for(var i = 0; i < this.spells.length; ++i)
	{
		if(this.spells[i] instanceof Spells.DefendSpell)
		{
			this.spells[i].effect(this, enemy);
		}
	}
	
	enemyTurn();
}

function enemyTurn(){
	enemy.act(player);
}

$.btnAttack.addEventListener('click', onAttackClick);
$.btnDefend.addEventListener('click', onDefendClick);