var args = arguments[0] || {},
	player = args.player || {},
	searchWord = args.searchKey || "",
	animation = require('alloy/animation'),
	Entity = require('entity'),
	enemies = [],
	turn = 0,
	currentEnemyIndex = -1,
	numHearts = 0,
	numSkulls = 0;

$.playerName.text = player.name;
$.xp.text = 'XP: '+ player.xp;

loadEnemies();
function loadEnemies() {
	//Create url pulling from Employment Guide with supplied keyword
	var url = "https://quasar-9.herokuapp.com/api/v1/job_postings?auth_token=1pSst1P7LAQBzNGc2bgW&site_of_origin=EG&q=" + searchWord;
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
	$.btnPickSkill.title = "Pick a Skill";
}

function onAttackClick(e){
	$.skillList.deleteRow(currentRow);
	Ti.API.info("Using Skill");
	Ti.API.info("Skill: ", $.btnPickSkill.title);
	Ti.API.info("CurrentEnemyIndex: ", currentEnemyIndex);
	Ti.API.info("Enemy: ", enemies[currentEnemyIndex].name);
	if(player.useSkill($.btnPickSkill.title, enemies[currentEnemyIndex])){
		SkillSuccessful();
	}
	else{
		//Unsuccessful attack
		SkillUnsuccessful();
	}
	resetButtons();
}

function SkillSuccessful(){
	animation.flash($.jobCard);
	numHearts++;
	$.hearts.children[turn].image = '/images/heart.png';
	++turn;
	if(numHearts >= 3){
		EnemyDefeated();
	}
}

function EnemyDefeated(){
	updateXP(100-(numSkulls*30));
	//Launch URL for player to apply to the position.
	
	var dialog = Ti.UI.createAlertDialog({
	    message: "Would you like to apply for this position?",
	    cancel: 1,
    	buttonNames: ['Yes', 'No'],
	    title: 'Apply?'
	 });
	dialog.addEventListener('click', function(e){
		if (e.index === 0){
			var idx = currentEnemyIndex;
			var win = Alloy.createController('jobwebview', enemies[idx]).getView();
			win.open({
				modal: true
			});
		}
	});
	dialog.show();
	
	Reset();
}


function SkillUnsuccessful(){
	animation.shake($.jobCard);
	numSkulls++;
	$.hearts.children[turn].image = '/images/skull.png';
	++turn;
	if(numSkulls >= 3){
		EnemyVictory();
	}
}

function EnemyVictory(){
	updateXP((numHearts*30)-100);
	Reset();
	//Do stuff if player is defeated.
	//Show URL for player to view job description?
}

function updateXP(change){
	player.updateXp(change);
	$.xp.text = "XP: "+player.xp;
}

function Reset()
{
	currentEnemyIndex = Math.floor(Math.random()*(enemies.length - 1));
	
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
	enemies.splice(currentEnemyIndex, 1);
	$.availableJobs.text = enemies.length;
	
	//Reset Current game stats
	turn = 0;
	numSkulls = 0;
	numHearts = 0;
	_.each($.hearts.children, function(heart){
		heart.image = "/images/heartEmpty.png";
	});
}

$.btnPickSkill.addEventListener('click', function(e){
	$.skillList.animate({
		top: 20,
		duration: 300
	});
});
var currentRow = false;
$.skillList.addEventListener('click', function(e){
	$.skillList.animate({
		top: "70%",
		duration: 300
	});
	$.btnPickSkill.title = e.row.title;
	$.btnAttack.touchEnabled = true;
	$.btnAttack.backgroundColor = 'red';
	currentRow = e.row;
});
$.btnAttack.addEventListener('click', onAttackClick);
$.btnSkipJob.addEventListener('click', function(e){
	if(numHearts || numSkulls){
		var dialog = Ti.UI.createAlertDialog({
		    message: 'Skip in middle of a game results in -50Xp',
		    cancel: 0,
    		buttonNames: ['Cancel', 'OK'],
		    title: 'Skip Game'
		 });
		dialog.addEventListener('click', function(e){
			if (e.index === 1){
				updateXP(-50);
			  	Reset();
			}
		});
		dialog.show();
	}
	else {
		Reset();
	}
	
});
