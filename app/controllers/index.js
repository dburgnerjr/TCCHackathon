function doClick(e) {
    alert(e.source.title);
    if (e.source.title == "Quit")
    	$.win.close();
}

$.win.open();

