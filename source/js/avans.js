// avans
var avans = (function(){
 	var config = {
		"topSearch": {
			"buttonOpen": document.querySelector('.search-link'),
			"buttonClose": document.querySelector('.top-search .close-icon'),
			"container": document.querySelector('.top-bar__container'),
			"class": "js-open"
		},
		"topMenu": {
			"buttonOpen": document.querySelector('.nav-link'),
			"buttonClose": document.querySelector('.nav .close-icon'),
			"container": document.querySelector('.nav'),
			"class": "js-open"
		}
	},	toggle = function(elem){
		var buttonOpen = elem.buttonOpen,
			buttonClose = elem.buttonClose;
		buttonOpen.addEventListener('click'	,function(evt){toggleClass(evt,elem)}, false);
		buttonClose.addEventListener('click',function(evt){toggleClass(evt,elem)}, false);

	},	toggleClass = function(evt,elem){
		evt.preventDefault();
		elem.container.classList.toggle( elem.class );

	},	init = function(){
		toggle(config.topMenu);
		toggle(config.topSearch);
	};
	return {
		init: init
	};
}());

avans.init();
