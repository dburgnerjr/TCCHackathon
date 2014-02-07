var args = arguments[0] || {};

var Entity = require('entity');
var Spells = require('spell');

var player = new Entity(args);
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
	
	e.source.backgroundImage = "images/attackPrs.jpg";
	
	//player.attack(enemy);
	
	e.source.backgroundImage = "images/attackBtn.jpg";
	
	setTimeout(enemyTurn, 500);
}

function onDefendClick(e){
	
	e.source.backgroundImage = "images/defendPrs.jpg";
	
	player.defend();
	
	e.source.backgroundImage = "images/defendBtn.jpg";
	
	setTimeout(enemyTurn, 500);
}

function enemyTurn(){
	//enemy.act(player);
}

$.btnAttack.addEventListener('click', onAttackClick);
$.btnDefend.addEventListener('click', onDefendClick);