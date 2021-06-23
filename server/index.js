const path = require('path');
const express = require('express');
const PORT = 3000;
const app = express();

function createApp() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  //app.use('/api', require('./api')); //For API's
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const error = new Error('Not found!');
      error.status = 404;
    } else {
      next();
    }
  });

  //Sends HTML File
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });
  //error handling middleware
  app.use((err, req, res, next) => {
    console.log(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error!');
  });
}

createApp();

app.listen(PORT, () => {
  console.log(`Wordstats is listening on port ${PORT}`);
});
