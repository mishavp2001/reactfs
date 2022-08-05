const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    resp.send({'hi': 'hello'});
} )

const PORT = process.env.PORT || 5001;

app.listen(PORT);
