function newGameClick(e)
{
	Alloy.createController('characterCreation').getView().open();
}

function quitGameClick(e)
{
	$.index.close();
}

$.index.open();
