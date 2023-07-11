const oracledb = require('oracledb')



module.exports = {
    init : function(){
        console.log('데이터베이스 초기화 완료');
        return oracledb.initOracleClient({libDir:__dirname+'./oracle_client'})
    }
}