const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/events', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const sendMessage = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // Send a message every 5 seconds
  const intervalId = setInterval(() => {
    sendMessage({ content: 'Server time: ' + new Date().toLocaleTimeString() });
  }, 5000);

  // Clean up on close
  req.on('close', () => {
    clearInterval(intervalId);
  });
});

app.listen(port, () => {
  console.log(`SSE server listening at http://localhost:${port}`);
});