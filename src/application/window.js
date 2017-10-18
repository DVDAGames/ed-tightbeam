const electron = require('electron');
const Hapi = require('hapi');
const Path = require('path');
const open = require('open');
const inert = require('inert');
const EliteDangerousJournalServer = require('@dvdagames/elite-dangerous-journal-server');

const {
  app,
  BrowserWindow,
  dialog,
} = electron;

// making this global allows us to work with it in other parts of the Electron app
var mainWindow = null;

// default port to 0 to get a random one
// we'll reassign this for our Electron Window after the server starts
let port = 0;

// start up server
const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, ''),
      },
    },
  },
});

server.connection({ port });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-finish-launching', () => {
  const JournalServer = new EliteDangerousJournalServer({
    port,
    serviceName: 'E:D Tightbeam',
    headers: {
      tightbeam: true,
    },
  });

  JournalServer.init();

  server.register(inert, (err) => {
    if (err) {
      throw err;
    }

    // default app route
    server.route({
      method: 'GET',
      path: '/',
      handler(request, reply) {
        reply.file('index.html');
      },
    });

    server.route({
      method: 'GET',
      path: '/assets/{filename}',
      handler(request, reply) {
        reply.file(`assets/${request.params.filename}`);
      },
    });

    server.start((e) => {
      if (e) {
        throw e;
      }

      // reassign port
      const { info: { port: newPort } } = server;

      port = newPort;
    });
  });
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 240,
    height: 320,
    resizable: false,
    fullscreen: false,
  });

  mainWindow.loadURL(`http://localhost:${port}/`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('new-window', (event, url) => {
    event.preventDefault();

    open(url);
  });
});

app.on('will-quit', () => {
  server.stop({ timeout: 60 * 1000 });
});
