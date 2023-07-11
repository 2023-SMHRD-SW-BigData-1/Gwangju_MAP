const express = require('express')
const app = express()
const path = require('path')
const indexRouter = require('./src/routes')


app.set('port',process.env.PORT || 3000)

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "map/build/index.html")))

app.use('/', indexRouter)    
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 port에서 서버연결 대기중..')
})