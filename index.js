const app = require('express')()
require('express-ws')(app);

//Rest Endpoint
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
});

app.ws('/echo' , (ws , req) => {
    ws.on('message' , (msg) => {
        ws.send(msg);
    });
});



app.listen(3000);