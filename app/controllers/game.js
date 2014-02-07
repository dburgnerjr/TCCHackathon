var args = arguments[0] || {};

var Entity = require('entity');

var player = args;

$.skillList.data = player.skills;

var enemies = [];

function loadEnemies() {
	var url = "https://quasar-9.herokuapp.com/api/v1/job_postings?auth_token=1pSst1P7LAQBzNGc2bgW&site_of_origin=EG&q=java&employer_id=1526";
	var client = Ti.Network.createHTTPClient({
    	 // function called when the response data is available
	     onload : function(e) {
    	     var json = JSON.parse(this.responseText);
    	     for (var i = 0; i < json.job_postings.length; i++) {
    	     	enemies.push(new Entity.parse(json.job_postings[i]));
    	     }
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
 
function onAttackClick(e){
	var result = player.useSkill(e.row.title);
	//Successful attack
	if(result > 0)
	{
		SkillSuccessful();
	}
	//Unsuccessful attack
	else
	{
		SkillUnsuccessful();
	}
}

function SkillSuccessful(){
	
}


function SkillUnsuccessful(){
	
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
});
$.btnAttack.addEventListener('click', onAttackClick);
