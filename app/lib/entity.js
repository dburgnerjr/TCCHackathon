function Entity(name)
{
	this.name = name;
	this.health = 100;
	this.attack = 10;
	this.defense = 2;
	
	this.spells = [];
}

Entity.prototype.addSpell = function(spell){
	this.spells.push(spell);
};

Entity.prototype.act = function(target){
	var randomNum = Math.floor(Math.random() * this.spells.length);
	
	this.spells[randomNum].effect(this, target);
};

module.exports = Entity;