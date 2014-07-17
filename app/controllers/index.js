var Entity = require('entity'),
	player = {},
	buttonClass= {
		width: 160,
		height: 40,
		top: 10,
		backgroundColor: '#4fa2d9',
		borderRadius: 5,
		color: "#fff"
	};

var btnNewGame;
var btnUpdate;

if(Ti.App.Properties.hasProperty('player')){
	playerObj = Ti.App.Properties.getObject('player', {}),
	player = new Entity.Player(playerObj);
	
	buttonClass.title = "New Game";
	btnNewGame = Ti.UI.createButton(buttonClass);
	btnNewGame.addEventListener('click', function(e){
		Alloy.createController('game', player).getView().open();
	});
	$.buttonContainer.add(btnNewGame);
	
	
	buttonClass.title = "Update Profile";
	btnUpdate = Ti.UI.createButton(buttonClass);
	btnUpdate.addEventListener('click', function(e){
		Alloy.createController('characterCreation', player).getView().open();
	});
	$.buttonContainer.add(btnUpdate);
}
else {
	player = new Entity.Player({});
	buttonClass.title = "Create Profile";
	btnUpdate = Ti.UI.createButton({
		width: 160,
		height: 40,
		top: 10,
		backgroundImage: '/images/linkedin-button.png',
		borderRadius: 5,
	});
	btnUpdate.addEventListener('click', function(e){
		alert('Attempting to create character via LinkedIn.');
		Alloy.createController('characterCreation', player).getView().open();
	});
	$.buttonContainer.add(btnUpdate);
}
/*
$.btnExit.addEventListener('click', function(e){
	$.index.close();
});
*/

//var mediaPlayer = Titanium.Media.createMusicPlayer('/audio/beethoven.mp3');

//mediaPlayer.play(); 


$.index.open();
