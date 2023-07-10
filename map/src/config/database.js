const oracledb = require('oracledb');

const db_config = {
    user: "campus_h_230627_1",
    password: "smhrd4",
    connectString: "project-db-stu2.smhrd.com:1524/xe"
}


module.exports = {
    init : function(){
        return mysql.createConnection(db_info)
    }, 
    connect : function(conn){
        conn.connect(function(err){
            if(err) console.log('연결 실패!')
            else console.log('연결 성공!')
        })
    }
}