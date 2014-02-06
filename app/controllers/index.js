$.btnNewGame.addEventListener('click', function(e){
	Alloy.createController('characterCreation').getView().open();
});

function quitGameClick(e)
{
	$.index.close();
}

$.index.open();
