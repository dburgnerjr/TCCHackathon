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
	Entity.call(this, job_posting.title);
	this.employer = job_posting.employer_name;
	this.source_url = job_posting.source_url;
	this.apply_url = job_posting.apply_url;
	this.description = job_posting.description;
	this.city = job_posting.city;
	this.state = job_posting.state;
};

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

Player.prototype.useSkill = function(skill, target)
{
	return target.description.match(skill) ? 1 : -1;
};

exports.Player = Player;
exports.Enemy = Enemy;