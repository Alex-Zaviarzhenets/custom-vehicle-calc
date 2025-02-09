const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('index.html');
    res.end(html)
  } else if (req.url === '/style.css') {
    const style = fs.readFileSync('style.css');
    res.setHeader('Content-Type', 'text/css');
    res.end(style)
  } else if (req.url === '/options.json') {
    const options = fs.readFileSync('options.json');
    res.end(options)
  }
    else if (req.url === '/script.js') {
    const script = fs.readFileSync('script.js')
    res.end(script)
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Error: Not found');
  }
});

server.listen(3000, () => {
  console.log('http://localhost:3000');
});

// Делаем запрос на файл data.json и берем оттуда данные
// fs.readFile('options.json', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     const jsonData = JSON.parse(data);
//     console.log(jsonData);
//     // Далее можно использовать данные из jsonData
//   }
// });
