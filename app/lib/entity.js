var Spells = require('spell');

function Entity(name)
{
	this.name = name;
	this.health = 100;
	this.power = 10;
	this.defense = 2;
	
	this.spells = [];
	this.addSpell(new Spells.AttackSpell());
	this.addSpell(new Spells.DefendSpell());
}

Entity.prototype.addSpell = function(spell){
	this.spells.push(spell);
};


Entity.prototype.act = function(target){
	var randomNum = Math.floor(Math.random() * this.spells.length);
	
	this.spells[randomNum].effect(this, target);
};

Entity.prototype.attack = function(target){
	this.spells[0].effect(this, target);
};

Entity.prototype.defend = function(){
	this.spells[1].effect(this, null);
};

Entity.prototype.useSpell= function(spellName, target){
	for(var i = 0; i < this.spells.length; ++i)
	{
		if(this.spells[i].name === spellName)
		{
			this.spells[i].effect(this, target);
		}
	}
};

module.exports = Entity;