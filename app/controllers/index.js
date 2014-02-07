var Entity = require('entity'),
	player = {},
	buttonClass= {
		width: 100,
		height: 40,
		top: 10,
		backgroundImage: '/images/blankBtn.png',
		backgroundSelcetedImage: '/images/blankPrs.png',
		borderRadius: 5,
		color: "#fff",
		title: ''
	};
if(Ti.App.Properties.hasProperty('player')){
	playerObj = Ti.App.Properties.getObject('player', {}),
	player = new Entity.Player(playerObj);
	
	buttonClass.title = "New Game";
	var btnNewGame = Ti.UI.createButton(buttonClass);
	btnNewGame.addEventListener('click', function(e){
		Alloy.createController('game', player).getView().open();
	});
	$.buttonContainer.add(btnNewGame);
	
	
	buttonClass.title = "Update Profile";
	var btnUpdate = Ti.UI.createButton(buttonClass);
	btnUpdate.addEventListener('click', function(e){
		Alloy.createController('characterCreation', player).getView().open();
	});
	$.buttonContainer.add(btnUpdate);
}
else {
	player = new Entity.Player({});
	buttonClass.title = "Create Profile";
	var btnUpdate = Ti.UI.createButton(buttonClass);
	btnUpdate.addEventListener('click', function(e){
		Alloy.createController('characterCreation', profile).getView().open();
	});
	$.buttonContainer.add(btnUpdate);
}
/*
$.btnExit.addEventListener('click', function(e){
	$.index.close();
});
*/
$.index.open();
