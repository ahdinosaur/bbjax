var nets = require('nets')

module.exports = function (settings) {

  var options = {
    url: settings.url,
    method: settings.type,
    headers: settings.headers,
    timeout: settings.timeout,
  };

  if (settings.dataType === 'json') {
    options.json = settings.data;
  } else {
    options.body = settings.data;
  }

  nets(options, function (err, response, body) {
    if (err) {
      settings.error(resp, resp.statusCode, err);
    } else {
      settings.success(body, resp.statusCode, resp);
    }
  });
};