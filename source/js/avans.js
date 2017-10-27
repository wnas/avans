// avans
var avans = (function() {
	var config = {
			"topSearch": {
				"buttonOpen": document.querySelector('.search-link'),
				"buttonClose": document.querySelector('.top-search .close-icon'),
				"container": document.querySelector('.top-bar__container'),
				"input": document.querySelector('.input--search'),
				"class": "js-open"
			},
			"topMenu": {
				"buttonOpen": document.querySelector('.nav-link'),
				"buttonClose": document.querySelector('.nav .close-icon'),
				"container": document.querySelector('.nav'),
				"class": "js-open"
			},
			"pageMenu": {
				"buttonOpen": document.querySelector('.page-menu .nav-link'),
				"buttonClose": document.querySelector('.page-menu__container .close-icon'),
				"container": document.querySelector('.page-menu__container'),
				"class": "js-open"
			},
			"screensizes": {
				"xl": 1200,
				"m": 768
			}
		},
		toggle = function(elem) {
			if (elem.buttonOpen !== null) {
				var buttonOpen = elem.buttonOpen,
					buttonClose = elem.buttonClose;

				buttonOpen.addEventListener('click', function(evt) {
					toggleClass(evt, elem);
					if (elem === config.topSearch) {
						focusSearch(elem);
					}
				}, false);

				buttonClose.addEventListener('click', function(evt) {
					toggleClass(evt, elem)
				}, false);

			}


		},
		toggleClass = function(evt, elem) {
			evt.preventDefault();
			evt.stopImmediatePropagation();
			evt.target.classList.toggle('clicked');
			elem.container.classList.toggle(elem.class);
		},
		focusSearch = function(elem) {
			elem.input.focus();
		},
		pageMenu = function() {
			var w = document.querySelector('body').clientWidth;
			var aside = document.querySelector('aside')
			var pm = document.getElementById('page-menu');
			if (w < config.screensizes.xl) {
				var cloneMenu = pm.cloneNode(true);
				cloneMenu.id = 'clone';
				cloneMenu.classList.add('page-menu--clone');
				aside.after(cloneMenu);

			}
		},
		subMenu = function() {
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
				toggler.addEventListener('click', function(e) {
					// don't go there
					e.preventDefault();
					// open the submenu instead.
					e.target.parentElement.classList.toggle('nav__sub--opened');
				});
				// add an event listener... duh.
				toggler.addEventListener('focus', function(e) {
					// don't go there
					e.preventDefault();
					// open the submenu instead.
					e.target.parentElement.classList.toggle('nav__sub--opened');
				});
				// and thanks for reading so far :).
			}

		},
		tabs = function() {
			// Get relevant elements and collections
			var tabbed = document.querySelector('.tabs__container');
			var tablist = tabbed.querySelector('.tabs');
			var tabs = tablist.querySelectorAll('a');
			var panels = tabbed.querySelectorAll('[id^="section"]');

			// The tab switching function
			var switchTab = function switchTab(oldTab, newTab) {
				newTab.focus();
				// Make the active tab focusable by the user (Tab key)
				newTab.removeAttribute('tabindex');
				// Set the selected state
				newTab.setAttribute('aria-selected', 'true');
				console.log(newTab.parentElement);
				newTab.parentElement.classList.add('tab__item--selected');
				oldTab.removeAttribute('aria-selected');
				oldTab.setAttribute('tabindex', '-1');
				oldTab.parentElement.classList.remove('tab__item--selected');
				// Get the indices of the new and old tabs to find the correct
				// tab panels to show and hide
				var index = Array.prototype.indexOf.call(tabs, newTab);
				var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
				panels[oldIndex].hidden = true;
				panels[index].hidden = false;

				return false;
			};

			// Add the tablist role to the first <ul> in the .tabbed container
			tablist.setAttribute('role', 'tablist');

			// Add semantics are remove user focusability for each tab
			Array.prototype.forEach.call(tabs, function(tab, i) {
				tab.setAttribute('role', 'tab');
				tab.setAttribute('id', 'tab' + (i + 1));
				tab.setAttribute('tabindex', '-1');
				tab.parentNode.setAttribute('role', 'presentation');

				// Handle clicking of tabs for mouse users
				tab.addEventListener('click', function(e) {
					e.preventDefault();
					var currentTab = tablist.querySelector('[aria-selected]');
					if (e.currentTarget !== currentTab) {
						switchTab(currentTab, e.currentTarget);
					}
				});

				// Handle keydown events for keyboard users
				tab.addEventListener('keydown', function(e) {
					// Get the index of the current tab in the tabs node list
					var index = Array.prototype.indexOf.call(tabs, e.currentTarget);
					// Work out which key the user is pressing and
					// Calculate the new tab's index where appropriate
					var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
					if (dir !== null) {
						e.preventDefault();
						// If the down key is pressed, move focus to the open panel,
						// otherwise switch to the adjacent tab
						dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
					}
				});
			});

			// Add tab panel semantics and hide them all
			Array.prototype.forEach.call(panels, function(panel, i) {
				panel.setAttribute('role', 'tabpanel');
				panel.setAttribute('tabindex', '-1');
				var id = panel.getAttribute('id');
				panel.setAttribute('aria-labelledby', tabs[i].id);
				panel.hidden = true;
			});

			// Initially activate the first tab and reveal the first tab panel
			tabs[0].removeAttribute('tabindex');
			tabs[0].setAttribute('aria-selected', 'true');
			tabs[0].parentElement.classList.add('tab__item--selected');
			panels[0].hidden = false;
		},
		responsiveSchedule = function() {
			var w = document.querySelector('body').clientWidth;
			var table = document.querySelector('.schedule');

			var header = table.querySelector('.schedule__row--head');


			if (w < config.screensizes.m) {
				var cloneHeader = header.cloneNode(true);
				var lineHeaders = table.querySelectorAll('.schedule__header--line');
				var len = lineHeaders.length;
				var i;
				// for (i = 0; i < len; i++) {
				for (i = 0; i < len; i++) {
					var line = lineHeaders[i];
					var clone = cloneHeader;
					console.log(clone);
					placeClone(line,clone);
				}
			}
		},
		placeClone = function(tar, clone) {
			tar.after(clone);
		},
		init = function() {
			if (config.topMenu.container !== undefined) {
				toggle(config.topMenu);
			}
			if (config.topSearch.container !== undefined) {
				toggle(config.topSearch);
			}
			if (config.pageMenu.container !== undefined) {
				toggle(config.pageMenu);
			}
			if (document.querySelectorAll('.nav__item--has-sub') !== null) {
				subMenu();
			}
			if (document.querySelector('.tabs__container') !== null) {
				tabs();
			}
			if (document.getElementById('page-menu') !== null) {
				pageMenu();
			}
		//	responsiveSchedule();
		};
	return {
		init: init
	};
}());

avans.init();
