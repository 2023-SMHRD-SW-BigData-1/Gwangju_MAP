const express = require('express');
const app = express()
const path = require('path')

app.set('port',process.env.PORT || 8080)


app.listen(app.get('port'), ()=> {
    console.log('8090서버 접속 중');

})