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
                     query: upcomingQuery })


    Tabletop.init( { key: public_spreadsheet_url,
                     callback: upcomingEventsFull,
                     simpleSheet: true,
                     query: upcomingQuery })


    Tabletop.init( { key: public_spreadsheet_url,
                     callback: pastEvents,
                     simpleSheet: true,
                     query: pastQuery })
  
}

// to do: require this and the upcomingEvents callback only on pages where this data is needed

  function upcomingEvents(data, tabletop) {

    var source = "<ul>{{#each this}} <li>{{date}}" + " - " + "<b>{{event}}</b>" + " - " + "<em>{{location}}</em>" + " - " + "<a href= '{{link}}'>More Info</a></li> {{/each}} </ul>";

    var template = Handlebars.compile(source);
    var result = template(data);

    $("#upcoming-events-placeholder").html(result);
    $("#upcoming-events-placeholder .spinner").remove();
    
  }

  function upcomingEventsFull(data, tabletop) {

    var source = "<ul>{{#each this}} <li>{{date}}" + " - " + "<b>{{event}}</b>" + " - " + "<em>{{location}}</em>" + " - " + "<a href= '{{link}}'>More Info</a></li> {{/each}} </ul>";

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


