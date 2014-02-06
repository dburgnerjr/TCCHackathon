$.btnNewGame.addEventListener('click', function(e){
	Alloy.createController('game',"Steve").getView().open();
});

$.index.open();
