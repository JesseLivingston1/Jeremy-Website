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
                     orderby: 'date',
                     reverse: false,
                     simpleSheet: true, 
                     query: upcomingQuery })


    Tabletop.init( { key: public_spreadsheet_url,
                     callback: upcomingEventsFull,
                     orderby: 'date',
                     reverse: false,
                     simpleSheet: true,
                     query: upcomingQuery })


    Tabletop.init( { key: public_spreadsheet_url,
                     callback: pastEvents,
                     orderby: 'date',
                     reverse: true,
                     simpleSheet: true,
                     query: pastQuery })
  
}

// to do: require this and the upcomingEvents callback only on pages where this data is needed

  function upcomingEvents(data, tabletop) {

    var source = "<ul>{{#each this}} <li>{{date}}" + " - " + "<b>{{event}}</b>" + " - " + "<em>{{location}}</em>" + " - " + "<a href= '{{link}}' target='_blank'>{{link}}</a></li> {{/each}} </ul>";

    var template = Handlebars.compile(source);
    var result = template(data);

    $("#upcoming-events-placeholder").html(result);
    $('#upcoming-events-placeholder ul li').hide();
    $('#upcoming-events-placeholder ul li:lt(4)').show();
    $("#upcoming-events-placeholder .spinner").remove();
    
  }

  function upcomingEventsFull(data, tabletop) {

    var source = "<ul>{{#each this}} <li>{{date}}" + " - " + "<b>{{event}}</b>" + " - " + "<em>{{location}}</em>" + " - " + "<a href= '{{link}}' target='_blank'>{{link}}</a></li> {{/each}} </ul>";

    var template = Handlebars.compile(source);
    var result = template(data);

    $("#upcoming-events-full-placeholder").html(result);
    $("#upcoming-events-full-placeholder .spinner").remove();
    
  }


// to do: require this and the pastEvents callback only on pages where this data is needed

  function pastEvents(data, tabletop) {

    var source = "<ul>{{#each this}} <li>{{date}}" + " - " + "<b>{{event}}</b>" + " - " + "<em>{{location}}</em></li> {{/each}} </ul>";

    var template = Handlebars.compile(source);
    var result = template(data);

    $("#past-events-placeholder").html(result);
    $("#past-events-placeholder .spinner").remove();
    
  };


