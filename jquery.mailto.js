/**
 * jquery.mailto
 */
 
(function($){

  //Attach this new method to jQuery
  $.fn.extend({ 
    
    //pass the options variable to the function
    mailto: function(options) {

      //Set the default values
      var defaults = {
        at: '[at]',
        dot : '[dot]'
      }
        
      var options =  $.extend(defaults, options);

      //We need a new jQuery collection for chainability
      var $links = $();

      this.each(function() {
        var o = options;
        var $el= $(this);
        //String replacement "at" and "dot"
        var email = $el.text().replace(o.at, "@").replace(o.dot, ".");
        //Create link element
        var $link = $('<a href="mailto:' + email + '">' + email + '</a>');
        //Replace initial element with link
        $el.replaceWith($link);
        //Add new link to the jQuery collection
        $links.push($link[0]);
      });
      //Return new collection (instead of initial elements)
      return $links;
    }
  });
  
})(jQuery);
