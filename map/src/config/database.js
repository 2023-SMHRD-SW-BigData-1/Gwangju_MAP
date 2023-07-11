const express = require('express')
const app = express()


const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))
oracledb.initOracleClient({libDir:'C:/Users/smhrd/Desktop/oracle연동'})

app.use('/', router)

const db_config = {
    user: "campus_h_230627_1",
    password: "smhrd4",
    connectString: "project-db-stu2.smhrd.com:1524/"
}


module.exports = {
    init : function(){
        return oracledb.Connection(db_config)
    }, 
    connect : function(conn){
        conn.connect(function(err){
            if(err) console.log('연결 실패!')
            else console.log('연결 성공!')
        })
    }
}