# page-menu

A list of navigation items

## place on page:

on desktop it is a list on the left of the content.
on mobile it is a small hamburger on the top of the content, when clicked it expands to fill the screen. It also is copied (with javascript) to the bottom of the page.

# Options

- It can get a class on the `<nav>` (top-level) tag.
- It needs to have a title (page-menu-title) that doubles as the hamburger menu...
- It can contain blocks, each a `<ul>` proceeded by a `<h3>`
- Each block has block-title, in said `<h3>`
- The block contains items, a `<li>` with a `<a>`
- The `<a>` has a `href` attribute.
- Default class on the `<a>` is `page-menu__link`,
- When active, the `<a>` also has the class `page-menu__link--active`
- At the end of the blocks there is a link to close the menu on mobile. (`.close-icon.skip-link`)
