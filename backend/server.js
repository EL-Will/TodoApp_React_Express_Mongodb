const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const {initWebRoute} = require('./router/todo.routes');

const PORT = 8000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

initWebRoute(app);
app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}`);
})