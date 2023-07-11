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

router.post('/user/join', (req, res) => {
    console.log('Join Router!',req.body)

    let sql2 = 'select id from tbl_member where id = ?'
    conn.query(sql2, [req.body.userData.id],(err,rows)=>{
            console.log(rows);
        if(rows.length>0){
            res.json({result : 'duplicated'})
        }else{
              // 회원가입 시작!
            let sql = 'insert into tbl_member values(?,?,?)'
            conn.query(sql,[req.body.userData.id, req.body.userData.pw, req.body.userData.add],(err,rows)=>{
                if(rows){
                    console.log('joined successfully!');
                    res.json({result : 'success'})
                }else{
                    console.log('Failed to Join...');
                    res.json({result : 'failed'})
                }
            })
           
        }
    })
    
})

router.post('/user/login',(req, res)=>{
    console.log('login Router!');
    let sql = "select * from tbl_member where id = ? and pw = ?"
    conn.query(sql,[req.body.userData.id, req.body.userData.pw], (err, rows)=>{
        console.log(rows);
        if(rows.length >0){
            res.json({result : 'success', id : req.body.userData.id})
        }else{
            res.json({result : 'failed'})
        }
    })
})

module.exports = router;