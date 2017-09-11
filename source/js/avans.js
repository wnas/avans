// avans
var avans = (function(){
 	var config = {
		"topSearch": {
			"buttonOpen": document.querySelector('.search-link'),
			"buttonClose": document.querySelector('.top-search .close-icon'),
			"container": document.querySelector('.top-search'),
			"class": "js-menu-open"
		},
		"topMenu": {
			"buttonOpen": document.querySelector('.nav-link'),
			"buttonClose": document.querySelector('.nav .close-icon'),
			"container": document.querySelector('.nav'),
			"class": "js-menu-open"
		}
	},	toggle = function(elem){
		var openButton = config.topMenu.buttonOpen;
		openButton.addEventListener('click'	,function(e){toggleClass(e)});


	},	toggleClass = function(e){
		e.preventDefault;
		console.log('hi',e);
		return false;
	},	init = function(){
		toggle('top-menu');
	};
	return {
		init: init
	};
}());

avans.init();
