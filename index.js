var nets = require('nets')

module.exports = function (settings) {

  var options = {
    uri: settings.url,
    method: settings.type,
    headers: settings.headers,
    timeout: settings.timeout,
  };

  if (settings.dataType === 'json') {
    options.json = settings.data;
  } else {
    options.body = settings.data;
  }

  nets(options, function (err, resp, body) {
    if (err) {
      settings.error(resp, resp && resp.statusCode, err);
    } else {
      settings.success(body, resp && resp.statusCode, resp);
    }
  });
};