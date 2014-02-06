function Spell(name){
	this.name = name;
}

Spell.prototype.effect = function(user, target){};

var AttackSpell = function(){
	Spell.call(this, "Attack");
};

AttackSpell.prototype = Object.create(Spell.prototype);
AttackSpell.prototype.constructor = AttackSpell;

AttackSpell.prototype.effect = function(user, target) {
	target.health -= user.power - target.defense;
	alert(user.name + " attacked.");
};

var DefendSpell = function(){
	Spell.call(this, "Defend");
};

DefendSpell.prototype = Object.create(Spell.prototype);
DefendSpell.prototype.constructor = DefendSpell;

DefendSpell.prototype.effect = function(user, target) {
	user.defense *= 2;
	alert(user.name + " defended.");
};

exports.AttackSpell = AttackSpell;
exports.DefendSpell = DefendSpell;
