/**
 * An object containing information about a specific data breach. This type is
 * returned from the Have I Been Pwned API.
 *
 * @typedef Breach
 * @type {object}
 * @property {string[]} DataClasses - An array of strings describing the types
 *   of information contained in the breach.
 * @property {string} Description - A string containing an HTML description of
 *   the breach.
 * @property {string} Title - The name of the data breach.
 */

/**
 * Display information about the data breaches found for a specific email.
 *
 * @param resultsPanel - The panel to display the information in.
 * @param email {string} - The email address that the breaches are associated
 *   with.
 * @param data {Map<number, Breach>} - A map between indices and information
 *   about each breach.
 */
function displayBreaches(resultsPanel, email, data) {
  var breachNoun = 'breach';
  var breachNounTitle = 'Breach';
  var isForm = 'is';
  if (data.length !== 1) {
    breachNoun = 'breaches';
    breachNounTitle = 'Breaches';
    isForm = 'are';
  }

  resultsPanel.addClass('red darken-4 grey-text text-lighten-2');

  // Update Header
  var header = resultsPanel.find('h3');
  header.addClass('text-lighten-1');
  header.text('Found Data ' + breachNounTitle);

  // Add message
  var msg = $(
    '<p>There ' + isForm + ' ' + data.length + ' known ' + 'data ' +
    breachNoun + ' containing the email address ' + email + '.</p>'
  );
  resultsPanel.append(msg);
  resultsPanel.append($('<hr class="my-4 red-text text-darken-3">'));

  // Display information about each breach.
  var cardContainer = $('<div class="card-stack"></div>');
  for (var key in data) {
    var breach = data[key];

    cardContainer.append($(
      '<div class="card blue-grey darken-4">' +
        '<div class="card-content">' +
          '<span class="card-title">' + breach.Title + '</span>' +
          '<p>' + breach.Description + '</p>' +
          '<p class="pt-3">' +
            '<strong>Information:</strong> ' + breach.DataClasses.join(', ') +
          '</p>' +
        '</div>' +
      '</div>'
    ));
  }
  resultsPanel.append(cardContainer);
}

/**
 * Display a message indicating no breaches were found for an email address.
 *
 * @param resultsPanel - The panel to display the message in.
 * @param email - The email address that no breaches were found for.
 */
function displayNoBreaches(resultsPanel, email) {
  // Update Header
  resultsPanel.find('h3').text('No Breaches Found');
  resultsPanel.addClass('green');

  // Add body message
  var text = $(
    '<p>No data breaches containing the email ' + email + ' were found in the ' +
    'Have I Been Pwned Database. This is good news, but does not necessarily ' +
    'mean none of your information has been compromised.</p>'
  );
  resultsPanel.append(text);
}

/**
 * Send an AJAX request to the Have I Been Pwned API requesting information for
 * a specific email address.
 *
 * @param email The email address to make the request for.
 * @param resultsFrame The frame to display the results in.
 */
function getBreachesForEmail(email, resultsFrame) {
  resultsFrame.empty();
  var panel = $('<div class="card-panel z-depth-3 p-3"><h3 class="my-0 center-align">Loading...</h3></div>');
  resultsFrame.append(panel);

  $.ajax(
    'https://haveibeenpwned.com/api/v2/breachedaccount/' + email,
    {
      statusCode: {
        404: displayNoBreaches.bind(null, panel, email)
      },
      success: displayBreaches.bind(null, panel, email)
    }
  )
}

/**
 * Initialize the Have I Been Pwned functionality.
 *
 * @param selector The selector for the container containing the form used to
 *   initiate the check as well as the results panel.
 */
function initHIBP(selector) {
  var container = $(selector);
  container.css('display', 'block');

  var results = container.find('#hibp-results');
  if (results.length === 0) {
    results = $('<div id="hibp-results"></div>');
    container.append(results);
  }

  var form = container.find('form');
  form.on('submit', function(event) {
    event.preventDefault();

    var emailInput = form.find('input[name="email"]');
    var email = emailInput.val();

    getBreachesForEmail(email, results);
  })
}
