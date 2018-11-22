const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.get([
  /[/]$/,
  '/index.html'
], (_, res) => {
  res.send(`
    <html>
    <head>
      <div id="root"></div>
      <script src="./dist/main.js"></script>
    </head>
    </html>
  `);
});
app.use(express.static('.'));
app.listen(9000, () => {
  console.log('Access the app at http://localhost:9000');
});
