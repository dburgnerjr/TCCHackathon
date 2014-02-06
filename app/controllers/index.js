
$.btnNewGame.addEventListener('click', function(e){
	Alloy.createController('characterCreation').getView().open();
});
/*
$.btnExit.addEventListener('click', function(e){
	$.index.close();
});
*/
$.index.open();
