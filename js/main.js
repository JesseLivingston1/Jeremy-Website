
//fittext//

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

//navbar collapse media query js//

$('#monitor').html($(window).width());

$(window).resize(function() {
    var viewportWidth = $(window).width();
    $('#monitor').html(viewportWidth);
});


//tabletop stuff//

  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0ArOMqtZIcWLedHZscTJQejR0QjI5WktYbWhfemhyOVE&output=html';
  
  var date = new Date();
  var todaysDate =  (date.getMonth() + 1) + "/" + date.getDate() + "/" +  date.getFullYear();
  
  var upcomingQuery = "date >= " + todaysDate;
  var pastQuery = "date <= " + todaysDate;

  function init() {

    Tabletop.init( { key: public_spreadsheet_url,
                     callback: upcomingEvents,
                     simpleSheet: true,
<<<<<<< HEAD
                     query: dateQuery } )
  };
=======
                     query: upcomingQuery } )

    Tabletop.init( { key: public_spreadsheet_url,
                     callback: pastEvents,
                     simpleSheet: true,
                     query: pastQuery } )
  }
>>>>>>> b7a8afa7c4b8c43876a9c55367aadf5c609d4ef5

// to do: require this and the upcomingEvents callback only on pages where this data is needed

  function upcomingEvents(data, tabletop) {

    var source = "<ul>{{#each this}} <li>{{date}}" + " - " + "<b>{{event}}</b>" + " - " + "<em>{{location}}</em></li> {{/each}} </ul>";

    var template = Handlebars.compile(source);
    var result = template(data);

    $("#upcoming-events-placeholder").html(result);
    $("#upcoming-events-placeholder .spinner").remove();
    
  }

// to do: require this and the pastEvents callback only on pages where this data is needed

  function pastEvents(data, tabletop) {

    var source = "<ul>{{#each this}} <li>{{date}}" + " - " + "<b>{{event}}</b>" + " - " + "<em>{{location}}</em></li> {{/each}} </ul>";

    var template = Handlebars.compile(source);
    var result = template(data);

    $("#past-events-placeholder").html(result);
    $("#past-events-placeholder .spinner").remove();
    
  };





