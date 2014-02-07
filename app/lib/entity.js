var Spells = require('spell');

function Entity(name)
{
	this.name = name;
	this.health = 100;
	this.power = 10;
	this.defense = 2;
	this.level = 1;
	this.experience = 0;
	
	this.spells = [];
	this.addSpell(new Spells.AttackSpell());
	this.addSpell(new Spells.DefendSpell());
	
	this.image = {};
	
	this.receivedResume = false;
	this.threwApplication = false;
}

Entity.prototype.addSpell = function(spell){
	this.spells.push(spell);
};


Entity.prototype.act = function(target){
	if(this.receivedResume)
	{
		this.useSpell("Throw Application");
	}
	else
	{
		var randomNum = Math.floor(Math.random() * this.spells.length);
	
		this.spells[randomNum].effect(this, target);
	}
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

Entity.prototype.calcLevel = function(){
	var curExperience = this.experience;
	var curLevel = 1;
	while(curExperience >= 0)
	{
		curExperience -= curLevel * 20;
		if(curExperience >= 0)
		{
			++curLevel;	
		}
	}
	this.level = curLevel;
};

module.exports = Entity;