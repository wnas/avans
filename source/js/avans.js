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
		if( elem !== null){
			buttonOpen.addEventListener('click'	,function(evt){toggleClass(evt,elem)}, false);
			buttonClose.addEventListener('click',function(evt){toggleClass(evt,elem)}, false);
		}


	},	toggleClass = function(evt,elem){
		evt.preventDefault();
		evt.target.classList.toggle('clicked');
		elem.container.classList.toggle( elem.class );
		return false;

	},	pageMenu = function(){
		var w = document.querySelector('body').clientWidth;
		var aside = document.querySelector('aside')
		var pm = document.getElementById('page-menu');
		if ( w < 992 ){
			var cloneMenu = pm.cloneNode(true);
			cloneMenu.id = 'clone';
			cloneMenu.classList.add('page-menu--clone');
			aside.after(cloneMenu);

		}
		console.log(w);
		console.log('hi there');
	},	subMenu = function(){
		// get the menu items with sub menus
		var sub = document.querySelectorAll('.nav__item--has-sub'),
			// count them.
			len = sub.length,
			// define i.
			i;

		// loop over all of 'm'
		for (i = 0; i < len; i++) {
			// close the submenus
			sub[i].classList.add('nav__sub--closed');
			// get all the links on the top level
			var link = sub[i].querySelector('a');
			// create a link
			var toggler = document.createElement('a');
			// add a class to the link
			toggler.classList.add('nav__sub-opener');
			// set some text, #TODO ask what text...
			toggler.textContent = 'Open the submenu.';

			// put the link in the dom after the first one, the toplevel one
			link.after(toggler);

			// add an event listener... duh.
			toggler.addEventListener('click',function(e){
				// don't go there
				e.preventDefault();
				// open the submenu instead.
				e.target.parentElement.classList.toggle('nav__sub--opened');
			});
			// add an event listener... duh.
			toggler.addEventListener('focus',function(e){
				// don't go there
				e.preventDefault();
				// open the submenu instead.
				e.target.parentElement.classList.toggle('nav__sub--opened');
			});
			// and thanks for reading so far :).
		}

	},	init = function(){
		toggle(config.topMenu);
		toggle(config.topSearch);
		subMenu();
		if( document.getElementById('page-menu') !== undefined){
			pageMenu();
		}
	};
	return {
		init: init
	};
}());

avans.init();
