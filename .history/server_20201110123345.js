const express = require('express');

const app = express();

const PORT = process.env.PORT || 4949 ;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));