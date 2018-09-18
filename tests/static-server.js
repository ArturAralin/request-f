const StaticServer = require('static-server');
const randomInt = require('random-int');

const PORT = randomInt(40000, 50000);
const server = new StaticServer({
  rootPath: __dirname,
  port: PORT,
  host: 'localhost',
  cors: '*',
  followSymlink: true,
  templates: {
    index: 'index.html',
  },
});

module.exports = {
  server,
  host: `http://localhost:${PORT}`,
};
