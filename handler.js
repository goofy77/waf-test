module.exports.hello = function (event, context, callback) {
  console.log(event);
  const response = {
    statusCode: 200,
    headers: {
      'x-custom-header': 'My Header Value',
    },
    body: JSON.stringify({ message:'hello' }),
  };

  callback(null, response);
};

module.exports.bye = function (event, context, callback) {
  console.log(event);
  const response = {
    statusCode: 200,
    headers: {
      'x-custom-header': 'My Header Value',
    },
    body: JSON.stringify({ message:'bye' }),
  };

  callback(null, response);
};