const app = require('express')();

app.get('/', (req, res) => res.send('DISCΩRTICS'));

module.exports = () => {
  app.listen(4000);
}