var args = arguments[0] || {};
$.webview.url = args.apply_url;
$.win.title = args.name || '';

$.close.addEventListener('click', function(e){
	$.jobwebview.close();
});
