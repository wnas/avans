/*
 * JavaScript Debug - v0.4 - 6/22/2010
 * http://benalman.com/projects/javascript-debug-console-log/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 *
 * With lots of help from Paul Irish!
 * http://paulirish.com/
 */
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*
 * ! HTML5 Placeholder jQuery Plugin v1.8 @link
 * http://github.com/mathiasbynens/Placeholder-jQuery-Plugin @author Mathias
 * Bynens <http://mathiasbynens.be/>
 */
(function (f) {
  var e = 'placeholder' in document.createElement('input'), a = 'placeholder' in document
      .createElement('textarea');
  if (e && a) {
    f.fn.placeholder = function () {
      return this
    }
  } else {
    f.fn.placeholder = function () {
      return this.filter((e ? 'textarea' : ':input') + '[placeholder]')
        .bind('focus.placeholder', b).bind('blur.placeholder', d)
        .trigger('blur.placeholder').end()
    }
  }
  function c (h) {
    var g = {}, i = /^jQuery\d+$/;
    f.each(h.attributes, function (k, j) {
      if (j.specified && !i.test(j.name)) {
        g[j.name] = j.value
      }
    });
    return g
  }

  function b () {
    var g = f(this);
    if (g.val() === g.attr('placeholder') && g.hasClass('placeholder')) {
      if (g.data('placeholder-password')) {
        g.hide().next().show().focus()
      } else {
        g.val('').removeClass('placeholder')
      }
    }
  }

  function d (i) {
    var l, k = f(this), h = k, g = k.data('placeholder-init');
    if (k.val() === '' || (!g && k.val() === k.attr('placeholder'))) {
      if (k.is(':password')) {
        if (!k.data('placeholder-textinput')) {
          try {
            l = k.clone().attr({
              type: 'text'
            })
          } catch (j) {
            l = f('<input>').attr(f.extend(c(k[0]), {
              type: 'text'
            }))
          }
          l.removeAttr('name').data('placeholder-password', true)
            .bind('focus.placeholder', b);
          k.data('placeholder-textinput', l).before(l)
        }
        k = k.hide().prev().show()
      }
      k.addClass('placeholder').val(k.attr('placeholder'))
    } else {
      k.removeClass('placeholder')
    }
    if (!g) {
      h.data('placeholder-init', true)
    }
  }

  f(function () {
    f('form').bind('submit.placeholder', function () {
      var g = f('.placeholder', this).each(b);
      setTimeout(function () {
        g.each(d)
      }, 10)
    })
  });
  f(window).bind('unload.placeholder', function () {
    f('.placeholder').val('')
  })
}(jQuery));

/* Equalize heights */
function doEqualizeHeights () {

  // Boxes in a container
  $( ".equal-heights" ).each(function( index ) {
    $(this).find('.box').equalHeights();
    $(this).find('.box-service-page').equalHeights();
  });
/*  $( ".equal-heights-body" ).each(function( index ) {
    $(this).find('.body p').equalHeights();
  });
  */
  // Footer navigation
  $('#footer-menu' ).each(function( index ) {
    $(this).find('.nav-footer > li').equalHeights();
  });

  // Blogger page
  $('.box-bloggers-columns' ).each(function( index ) {
    $(this).find('.blogger figcaption').equalHeights();
  });
  $('.box-bloggers-columns' ).each(function( index ) {
    $(this).find('.blogger h2').equalHeights();
  });

  // Social channels
  $('.box-channel' ).each(function( index ) {
    $(this).find('.body').equalHeights();
  });

  // Contact and Locations
  $('#contact-locations-grid' ).each(function( index ) {
    $(this).find('.equal-heights').equalHeights();
  });

  // Projecten
  $('.box-project-list' ).each(function( index ) {
    $(this).find('.project-body').equalHeights();
  });
  $('.box-project-list' ).each(function( index ) {
    $(this).find('.project-status').equalHeights();
  });
  $('.box-project-list' ).each(function( index ) {
    $(this).find('.project-keywords').equalHeights();
  });

  // Programme Search
  $('.box-program-finder-form' ).each(function( index ) {
    $(this).find('fieldset').equalHeights();
  });

  $('.box-program-finder-form' ).each(function( index ) {
    $(this).find('li.box-program-form span.h2').equalHeights();
  });
}

/* Smart resize */
(function ($, sr) {

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced () {
      var obj = this, args = arguments;

      function delayed () {
        if (!execAsap) {
          func.apply(obj, args);
        }
        timeout = null;
      }
      ;

      if (timeout) {
        clearTimeout(timeout);
      } else if (execAsap) {
        func.apply(obj, args);
      }

      timeout = setTimeout(delayed, threshold || 100);
    };
  }
  // smartresize
  jQuery.fn[sr] = function (fn) {
    return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
  };

})(jQuery, 'smartresize');

/* [A] Carousel */
function doCarousel () {
  $('.box-carousel').each(function () {

    var carousel = $(this);
    var carouselSize = carousel.find('.slide').size()

    // Activate slideshow if more than one slide
    if (carouselSize > 1) {
      carousel.slides({
        preload: true,
        preloadImage: 'img/ajax-loader.gif',
        effect: 'fade',
        fadeSpeed: 750,
        fadeEasing: "easeOutQuad",
        crossfade: true,
        play: 5000,
        pause: 2500,
        hoverPause: true
      });
    }
  })
}

/* [C] Toggle between bloggers in blogs teaser block */
function doBlogsTeaserToggler () {
  $('.box-blogs-teaser')
    .find('.body ul a')
    .click(
    function (e) {

      // Disable click
      e.preventDefault();

      // Initialize
      var button = $(this), currentBloggerId = button
        .data('id'), blogsBox = button.parents('.box'), bloggersList = button
        .parents('ul'), bloggerBackground = blogsBox
        .find('.quote'), bloggerQuote = blogsBox
        .find('blockquote'), bloggerButton = blogsBox
        .find('.button'), bloggerDescription = blogsBox
        .find('.body p span');

      // Get data for clicked blogger
      var blogger = blogAuthors[currentBloggerId];

      // Populate box with this blogger
      if (blogger != undefined) {
        bloggerBackground.css('background-image', 'url('
          + blogger['image'] + ')');
        bloggerQuote.html(blogger['quote']);
        bloggerButton.attr('href', blogger['url']);
        bloggerButton.attr('onclick', blogger['onclick']);
        bloggerDescription.html(blogger['description']);
        // (De)activate buttons
        button.parents().find('a.active').removeClass(
          'active');
        button.addClass('active');
      } else {
        // Fail gracefully
        return false;
      }

    });
}

/*******************************************************************************
 * [E] doTwitterUpdates()
 *
 * Perform Twitter box status update
 */
function doTwitterUpdates () {

  // Initialize
  var twitterBox = $('#twitter'), currentTweetId = twitterBox.data('item'), tweetBody = twitterBox
    .find('blockquote'), tweetDate = twitterBox.find('time');

  // Start fade out
  tweetBody.fadeOut('slow', function () {

    // Calculate next tweet id
    nextTweetId = (currentTweetId + 1) % twitterItems.length;

    // Populate box with this tweet
    tweetBody.html(twitterItems[nextTweetId][0]);
    tweetDate.attr('datetime', twitterItems[nextTweetId][1]);
    tweetDate.text(twitterItems[nextTweetId][2]);

    // Update current item id
    twitterBox.data('item', nextTweetId);

    // Start fade in
    tweetBody.fadeIn('slow');

  });
}

/*******************************************************************************
 * [F] getNewsTicker()
 *
 * News fade in / fade out
 */
function getNewsTicker () {

  var newsList = $('#news-ticker'), curItem = newsList.data('item');
  itemContainer = newsList.find('.container'), itemText = itemContainer
    .children('a'), itemDate = itemContainer.children('.date');

  itemContainer.fadeOut("slow", function () {

    // TODO Use % like below
    if (newsItems[curItem + 1]) {
      itemText.text(newsItems[curItem + 1][0]);
      itemText.attr('href', newsItems[curItem + 1][1]);
      itemDate.text(newsItems[curItem + 1][2]);

      newsList.data('item', curItem + 1);
    } else {
      itemText.text(newsItems[0][0]);
      itemText.attr('href', newsItems[0][1]);
      itemDate.text(newsItems[0][2]);

      newsList.data('item', 0);
    }

    itemContainer.fadeIn('slow');
  });
}

/* [K] [AH] Accordion */
function doAccordion (selector) {
  $(selector)
    .each(
    function () {

      var accordion = $(this), parent = accordion.parent(), isOpen = accordion
        .hasClass('open'), isInPage = parent
        .hasClass('accordion-page');

      if (!isOpen) {
        accordion.find('ul').hide();
      }

      if (isInPage) {

        // Accordion in content area
        accordion.click(function () {

          var elem = $(this);

          if (elem.hasClass('open')) {
            elem.find('ul').hide('slow');
            elem.find('a').first()
              .removeClass('active');
            elem.removeClass('open');
          } else {
            elem.find('ul').show('slow');
            elem.find('a').first().addClass('active');
            elem.addClass('open');
          }

          return false;

        });

      } else {

        // Accordion in navigation tree
        accordion.each(function () {

          var elem = $(this), toggle = elem.find('span');

          toggle.click(function () {
            if (toggle.parent().hasClass('open')) {
              elem.find('ul').hide('slow');
              elem.find('a').first().removeClass(
                'active');
              toggle.parent().removeClass('open');
            } else {
              elem.find('ul').show('slow');
              elem.find('a').first().addClass(
                'active');
              toggle.parent().addClass('open');
            }
            return false;
          });

        });
      }
    });
}

/* [W] Program courses table */
function doProgramCoursesTable () {

  // Verberg jaar tabellen m.u.v. eerste jaar
  $('.box-program-courses table').each(function (i) {
    if (i > 0) {
      $(this).hide();
    }
  });

  // tab voor studiejaar overzicht wisselbaar maken
  $('.box-program-courses .nav-tabs li').click(function (e) {
    e.preventDefault();

    var curTab = $(this), showJaar = curTab.find('a').data('year');

    // verberg studiejaar tabellen
    $('.box-program-courses table').hide();

    // reset actieve tabs
    $('.box-program-courses .nav-tabs li').removeClass('active');

    // gekozen jaar activeren
    $('#' + showJaar).fadeIn();

    // gekozen tab activeren
    curTab.addClass('active');
  });

  // show overlay - for 07a.opleiding.studieprogramma.nav-tabs
  // 1. kopieer de drempelvrij container naar de modal container
  // 2. toon de overlay
  $('a[data-overlay-id]')
    .click(
    function (e) {
      e.preventDefault();

      var link = $(this).data('overlay-id'), textContainer = $(
        '#' + link).html(), modalContainer = $('#overlay');

      if (modalContainer.size() == 1) {
        modalContainer
          .html(textContainer)
          .append(
          '<a class="close-reveal-modal button">Sluit venster</a>');

        modalContainer.reveal({
          animation: 'fade'
        });
      } else {
        console
          .log('Oeps, er is geen modal container aanwezig (of er zijn er teveel');
      }
    });

}

/* Auto submit form */
$('form.autosubmit').each(function () {
  // Hide submit button
  $(this).find('[type="submit"]').hide();
  // Call submit on change
  $(this).change(function () {
    $(this).submit();
  });
});

/* Form field validations */
$('form').submit(function () {

  var valid = true;

  // For all fields bearing a validation data function
  $(this).find('[data-validation]').each(function () {
    // Get the field's value, build the function name
    var formElement = $(this);
    var validationFunction = formElement.data('validation');
    // If neither are empty call the function and save its value
    if (validate[validationFunction]) {
      valid = (valid && validate[validationFunction](formElement));
    }
  });

  return valid;

})

var validate = {

  // Validate Dutch postal code
  // http://www.codingforums.com/showthread.php?t=178654
  dutchPostalcode: function (formElement) {
    var postalCode = $(formElement).val();
    // Test against regex
    if (!/^[1-9]\d{3}\s?[A-Za-z]{2}$/.test(postalCode)) {
      // Alert error message
      if (postalCode == undefined || postalCode == '') {
        alert("Vul een postcode in.");
      } else {
        alert("'" + postalCode + "' is geen geldige postcode.");
      }
      // Invalidate and focus form element
      $(formElement).addClass('invalid').focus();
      return false;
    }
    return true;
  }

}

/* iOS viewport */
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
  var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
  if (viewportmeta) {
    viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
    document.body
      .addEventListener(
      'gesturestart',
      function () {
        viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
      }, false);
  }
}

/* Mobile Safari in standalone mode */
if (("standalone" in window.navigator) && window.navigator.standalone) {
  var noddy, remotes = false;
  document
    .addEventListener(
    'click',
    function (event) {
      noddy = event.target;
      while (noddy.nodeName !== "A"
      && noddy.nodeName !== "HTML") {
        noddy = noddy.parentNode;
      }
      if ('href' in noddy
        && noddy.href.indexOf('http') !== -1
        && (noddy.href.indexOf(document.location.host) !== -1 || remotes)) {
        event.preventDefault();
        document.location.href = noddy.href;
      }
    }, false);
}

/* Obtain the subject using the selected menu label. */
function getSubjectBySelectedMainMenu () {
  var menuText = $("nav.nav-group > ul.group > li > a.active").attr("href");
  var subject = "";
  if (!menuText) {
    return "";
  }
  if (menuText.indexOf("opleidingen") > -1) {
    subject = "programs";
  } else if (menuText.indexOf("bedrijven-en-instellingen") > -1) {
    subject = "enterprise";
  } else if (menuText.indexOf("onderzoek") > -1) {
    subject = "research";
  } else if (menuText.indexOf("over-avans" > -1)) {
    subject = "about";
  }
  return subject;
}

/* Search dropdown box */
$('form.inline-search input[type=search]').keyup(
  function () {

    var q = $(this).val();

    var dropdown = $('form div.inline-search-result');
    if (q.length > 2) {

      var contextSubject = getSubjectBySelectedMainMenu();
      dropdown.show();

      // Do a prefix search, filter the list out of the html
      var searchForm = $(this).parent();
      var formAction = searchForm.attr("action");

      // encode spaces, jquery will otherwise interpret string as a
      // filter id
      q = encodeURIComponent(q);
      var url = formAction + "/drop-down?q=" + q + "&prefixSearch=true"
        + "&contextSubject=" + contextSubject;

      dropdown.load(url, bindSearchDropdownHandlers);

    } else {
      dropdown.hide();
    }
  });

// (Re-)bind the jquery handlers on the search suggestions dropdown.
var bindSearchDropdownHandlers = function () {

  $('#search-suggestions-show-all').click(function () {
    $('form.inline-search input[name=prefixSearch]').val('true');
    $('form.inline-search').submit();
  });

  $('#search-suggestions-close').click(function () {
    // Hide suggestions and clear keyword field
    $('form div.inline-search-result').hide();
    $('form.inline-search').children('input[type=search]').val('');
  });
}
