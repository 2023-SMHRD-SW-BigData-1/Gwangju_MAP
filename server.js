const express = require('express')
const app = express()
const path = require('path')
const indexRouter = require('./routes')
const database = require('./config/database')
const oracledb = require('oracledb')
const cors = require('cors')


app.set('port',process.env.PORT || 8888)

// 데이터베이스 설정
database.init() // DB 초기화
oracledb.autoCommit = true // 자동 커밋
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "map/build/index.html")))

app.use('/', indexRouter)    
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 port에서 서버연결 대기중..')
})