$.btnLaunch.addEventListener('click', function(e){
	Alloy.createController('game',$.nameField.value).getView().open();
});

$.btnCancel.addEventListener('click', function(e){
	$.characterCreation.close();
});

$.characterCreation.open();
