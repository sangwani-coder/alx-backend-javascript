const express = require('express');

const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);

const hostname = '127.0.0.1';
const port = 1245;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(args.toString());
    res.write('This is the list of our students\n');
    res.end(`${students}`);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
