const express = require('express');

const app = express();


app.get('/', (req, res) => res.json("Hello World"));


const PORT = process.env.PORT || 4949;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));