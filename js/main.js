
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



//tabletop calendar page//


  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0ArOMqtZIcWLedHZscTJQejR0QjI5WktYbWhfemhyOVE&output=html';
  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true} )
  }

  function showInfo(data, tabletop) {

    var source = "<ul>{{#each this}} <li>{{date}}" + " - " + "<b>{{event}}</b>" + " - " + "<em>{{location}}</em></li> {{/each}} </ul>";

    var template = Handlebars.compile(source);
    var result = template(data);

    $("#events-placeholder2").html(result);
    $("#events-placeholder2 .spinner").remove();
    
  }


//tabletop homepage//

  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0ArOMqtZIcWLedHZscTJQejR0QjI5WktYbWhfemhyOVE&output=html';
  var date = new Date();
  var todaysDate =  (date.getMonth() + 1) + "/" + date.getDate() + "/" +  date.getFullYear();
  var dateQuery = "date >= " + todaysDate;
  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true,
                     query: dateQuery } )
  }

  function showInfo(data, tabletop) {

    var source = "<ul>{{#each this}} <li>{{date}}" + " - " + "<b>{{event}}</b>" + " - " + "<em>{{location}}</em></li> {{/each}} </ul>";

    var template = Handlebars.compile(source);
    var result = template(data);

    $("#events-placeholder").html(result);
    $("#events-placeholder .spinner").remove();
    
  }


//navbar collapse media query js//
$('#monitor').html($(window).width());

$(window).resize(function() {
    var viewportWidth = $(window).width();
    $('#monitor').html(viewportWidth);
});