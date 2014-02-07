var player = arguments[0] || {},
	animation = require('alloy/animation'),
	Entity = require('entity'),
	enemies = [],
	turn = 0,
	currentEnemyIndex = -1,
	numHearts = 0,
	numSkulls = 0;

loadEnemies();

function loadEnemies() {
	var url = "https://quasar-9.herokuapp.com/api/v1/job_postings?auth_token=1pSst1P7LAQBzNGc2bgW&site_of_origin=EG&q=java&employer_id=1526";
	var client = Ti.Network.createHTTPClient({
    	 // function called when the response data is available
	     onload : function(e) {
    	     var json = JSON.parse(this.responseText);
    	     enemies = [];
    	     for (var i = 0; i < json.job_postings.length; i++) {
    	     	var enemy = new Entity.Enemy(json.job_postings[i]);
    	     	enemies.push(enemy);
    	     }
    	     
    	     Reset();
	     },
    	 // function called when an error occurs, including a timeout
	     onerror : function(e) {
    	     Ti.API.debug(e.error);
        	 alert('error');
	     },
    	 timeout : 5000  // in milliseconds
	 });
 	 // Prepare the connection.
 	 client.open("GET", url);
	 // Send the request.
	 client.send();
}

function resetButtons () {
	$.btnAttack.touchEnabled = false;
	$.btnAttack.backgroundColor = "#999";
	$.btnPickSkill.title = "Pick a Skill";
}

function onAttackClick(e){
	var result = player.useSkill($.btnPickSkill.title, enemies[currentEnemyIndex]);
	if(result > 0){
		SkillSuccessful();
	}
	else{
		//Unsuccessful attack
		SkillUnsuccessful();
	}
	resetButtons();
	++turn;
}

function SkillSuccessful(){
	animation.shake($.jobCard);
	numHearts++;
	$.hearts.children[turn].image = '/images/heart.png';
	if(numHearts >= 3){
		EnemyDefeated();
		Reset();
	}
}

function EnemyDefeated(){
	//Launch URL for player to apply to the position.
}


function SkillUnsuccessful(){
	animation.flash($.jobCard);
	numSkulls++;
	$.hearts.children[turn].image = '/images/skull.png';
	if(numSkulls >= 3){
		EnemyVictory();
		Reset();
	}
}

function EnemyVictory(){
	//Do stuff if player is defeated.
	//Show URL for player to view job description?
}

function Reset()
{
	currentEnemyIndex++;
	numSkulls = 0;
	numHearts = 0;
	
	var data = [];
	//Iterate player skills and create table rows
	_.each(player.skills, function(skill){
		var row = Ti.UI.createTableViewRow({
			title: skill
		});
		data.push(row);
	});
	//Update table
	$.skillList.data = data;
	Ti.API.info('enemydesc', enemies[currentEnemyIndex].description);
	$.jobTitle.text = enemies[currentEnemyIndex].name;
	$.employerTitle.text = enemies[currentEnemyIndex].employer;
	$.jobLocation.text = enemies[currentEnemyIndex].city + ", " + enemies[currentEnemyIndex].state;
}

$.btnPickSkill.addEventListener('click', function(e){
	$.skillList.animate({
		top: 20,
		duration: 300
	});
});
$.skillList.addEventListener('click', function(e){
	$.skillList.animate({
		top: "70%",
		duration: 300
	});
	$.btnPickSkill.title = e.row.title;
	$.btnAttack.touchEnabled = true;
	$.btnAttack.backgroundColor = 'red';
	$.skillList.remove(e.row);
});
$.btnAttack.addEventListener('click', onAttackClick);
