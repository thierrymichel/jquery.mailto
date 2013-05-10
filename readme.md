# mailto

## jQuery plugin to manage "mailto" links

Just a test for my first Github repository and my first jQuery plugin (Vanilla version coming soon :)

## Usage

Create an HTML element for email addresses and replace "@" and "." with what you want (default is [at] and [dot])...

    <span class="email">john.doe[at]domain[dot]com<span>
    <span data-type="mailto">john.doe/foo/domain{bar}com<span>

... and use the mailto() method.

    $('.email').mailto();
    $('[data-type="mailto"]').mailto({at: '/foo/', dot: '{bar}'});

That's it !

## Contact

If you have any questions or improvements : [hello@thierrymichel.net](mailto:hello@thierrymichel.net)