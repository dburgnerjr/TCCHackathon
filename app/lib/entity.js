function Entity(name)
{
	this.name = name;	
}

var Player = function(name, skills){
	Entity.call(this, name);
	this.skills = skills;
};

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

var Enemy = function(job_posting){
	Ti.API.info("Enemy constructor called.\n", JSON.stringify(job_posting));
	Entity.call(this, job_posting.title);
	this.source_url = job_posting.source_url;
	this.apply_url = job_posting.apply_url;
	this.description = job_posting.description;
};

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

Player.prototype.useSkill = function(skill, target)
{
	return target.description.match(skill) ? 1 : -1;
};

exports.Player = Player;
exports.Enemy = Enemy;