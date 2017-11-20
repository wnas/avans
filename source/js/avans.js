// avans
;
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
            },
            "topmenuheight": false
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
                    // debugger;
                    if (elem === config.topMenu && config.topmenuheight === false) {
                        config.topmenuheight = true;
                        config.topMenu.container.style.height = document.body.clientHeight + 'px';
                        return false;
                    }
                    if (elem === config.topMenu && config.topmenuheight === true) {
                        config.topmenuheight = false;
                        config.topMenu.container.style.height = '';
                        return false;
                    }
                }, false);

                buttonClose.addEventListener('click', function(evt) {
                    toggleClass(evt, elem);
                    if (elem === config.topMenu) {
                        var h = 0;
                        config.topMenu.container.style.height = h + 'px';
                    }
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
        activate = function(e) {
            if (e.target.className === 'tab__link') {
                // don't go there
                e.preventDefault();
                changeHistory(e);
                switchTab(e);
            }
        },
        changeHistory = function(e) {
            if (window.history.pushState) {
                window.history.pushState('', '/', window.location.pathname);
            } else {
                window.location.hash = '';
            }
            var url = window.location.href;

            window.location.href = url + '#activeTab=' + e.target.hash.slice(1);
        },
        switchTab = function(e) {
            console.log(e);
            var tabLink = e.target,
                tabTarget = e.target.hash.slice(1),
                activeTab = document.getElementById(tabTarget),
                tabGroup = e.target.dataset.tabgroup,
                tabList = tabLink.parentElement.parentElement,
                tabs = tabList.nextElementSibling.querySelectorAll('.tab__content[data-tabgroup="' + tabGroup + '"]'),
                tabItems = tabList.querySelectorAll('.tab__item'),
                len = tabItems.length,
                i;

            for (i = 0; i < len; i++) {
                hideTabs(tabItems[i], tabs[i]);

            }
            showTab(tabLink, activeTab);
        },
        showTab = function(link, tab) {
            // show the selected link
            link.parentElement.classList.add('tab__item--selected');
            link.setAttribute('aria-selected', 'true');
            // show the correct tab
            tab.removeAttribute('hidden');
        },
        hideTabs = function(links, tabs) {
            // hide all the links
            links.classList.remove('tab__item--selected');

            links.removeAttribute('aria-selected');
            links.setAttribute('tabindex', '-1');
            // we go to work on the old tabs...
            tabs.setAttribute('hidden', '');
        },
        tabs = function() {
            var container = document.querySelector('.tabs__container');
            container.addEventListener('click', activate, false);
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
        };
    return {
        init: init
    };
}());

avans.init();