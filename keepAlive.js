const http = require('http');
const keepAliveInterval = 20 * 60 * 1000; // 20 minutes (adjust as needed)

const keepServerAlive = () => {
  console.log('Sending keep-alive request...');
  http.get('http://uptimer-bot-1.0gd.repl.co/', (res) => {
    const { statusCode } = res;
    if (statusCode === 200) {
      console.log('Keep-alive successful.');
    } else {
      console.error('Keep-alive request failed.');
    }
  });
};

setInterval(keepServerAlive, keepAliveInterval);
