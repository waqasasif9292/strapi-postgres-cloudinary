const path = require('path');

module.exports = ({ env }) => {
console.log("final configuration sqlite",  env('DATABASE_FILENAME', '.tmp/data.db'));
console.log("final configuration sqlite 2",  path.join(__dirname, '..', '.tmp/data.db'));

  return ({
    connection: {
      client: 'sqlite',
      connection: {
        // filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        filename: env('DATABASE_FILENAME', path.join(__dirname, '..', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  })
};


