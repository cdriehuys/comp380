function getBreaches(callback) {
  $.ajax(
    'https://haveibeenpwned.com/api/v2/breaches',
    {
      success: function(data) {
        callback(mapBreachesToJSON(data));
      }
    }
  )
}

function mapBreachesToJSON(data) {
  var eventList = [];
  for (var key in data) {
    var breach = data[key];
    var date = new Date(breach.BreachDate);

    eventList.push(
      {
        start_date: {
          day: date.getUTCDay(),
          month: date.getUTCMonth() + 1,
          year: date.getUTCFullYear()
        },
        text: {
          headline: breach.Title,
          text: breach.Description
        }
      }
    )
  }

  return eventList;
}

function populateTimeline(destinationId) {
  var callback = function(events) {
    var timeline = new TL.Timeline(destinationId, { events: events });
  };

  getBreaches(callback);
}
