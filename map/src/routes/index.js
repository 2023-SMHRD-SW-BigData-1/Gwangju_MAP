const express = require('express');
const router = express.Router();
const path = require('path');

const db_config = require('../config/database')
let conn = db_config.init()
db_config.connect(conn)

router.get('/', (req, res) => {
    console.log('index Router')
    res.send(path.join(__dirname, "map/build/index.html"))
})