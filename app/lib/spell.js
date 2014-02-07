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

var ThrowResumeSpell = function() {
	Spell.call(this, "Throw Resume");
};

ThrowResumeSpell.prototype = Object.create(Spell.prototype);
ThrowResumeSpell.prototype.constructor = ThrowResumeSpell;

ThrowResumeSpell.prototype.effect = function(user, target) {
	if(target.health < 20)
	{
		target.resumeReceived = true;
		alert(user.name + " threw a resume.");
	}
	else
	{
		alert(user.name + "'s resume didn't impress.");
	}
	
};

var ThrowApplicationSpell = function() {
	Spell.call(this, "Throw Resume");
};

ThrowApplicationSpell.prototype = Object.create(Spell.prototype);
ThrowApplicationSpell.prototype.constructor = ThrowApplicationSpell;

ThrowApplicationSpell.prototype.effect = function(user, target) {
	user.experience += target.level * 10;
	
};

exports.AttackSpell = AttackSpell;
exports.DefendSpell = DefendSpell;
exports.ThrowResumeSpell = ThrowResumeSpell;
exports.ThrowApplicationSpell = ThrowApplicationSpell;
