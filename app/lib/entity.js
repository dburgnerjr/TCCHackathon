function Entity(name)
{
	this.name = name;	
}

var Player = function(obj){
	Entity.call(this, obj.name || '');
	this.skills = obj.skills || ["HTML", "Java", 'PHP', 'CSS', 'JavaScript'];
	this.xp = obj.xp || 0;
	this.achievements = obj.achievements || [];
	if(!obj.achievements)
	{
		this.addAchievement("Noob Alert");
	}
};

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;
Player.prototype.save = function() {
	Ti.App.Properties.setObject('player', {name: this.name, xp: this.xp, skills: this.skills, achievements: this.achievements});
};
Player.prototype.updateXp = function(change) {
	this.xp += change;
	this.save();
};

Player.prototype.useSkill = function(skill, target)
{	
	Ti.API.info("Skill: ", skill.toLowerCase());
	Ti.API.info("Target: ", target.name || "No name");
	Ti.API.info("Description: ", target.description || "empty");
	var result = target.description.indexOf(skill.toLowerCase());
	Ti.API.info("Result: ", result);
	
	return result != -1;
};

Player.prototype.addAchievement = function(achievementName)
{
	this.achievements.push(achievementName);
};

Player.prototype.hasAchievement = function(achievementName)
{
	var match = false;
	
	for(var i = 0; i < this.achievements.length; ++i)
	{
		if(this.achievements[i] === achievementName)
		{
			match = true;
			i = achievements.length;
		}
	}
	
	return match;
};

var Enemy = function(job_posting){
	Entity.call(this, job_posting.title);
	this.employer = job_posting.employer_name;
	this.source_url = job_posting.source_url;
	this.apply_url = job_posting.apply_url;
	this.description = job_posting.description.toLowerCase();
	this.city = job_posting.city;
	this.state = job_posting.state;
};

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

exports.Player = Player;
exports.Enemy = Enemy;