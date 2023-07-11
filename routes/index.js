const express = require('express');
const router = express.Router();
const oracledb = require('oracledb')
const db_config = require('../config/dbconfig')



router.get('/', (req, res) => {
    console.log('index Router')
    res.send(path.join(__dirname, "map/build/index.html"))
})

router.post('/user/join', (req, res) => {
    console.log('Join Router!',req.body)

    let sql2 = 'select id from tbl_member where mb_id = :mb_id'
    // conn.query(sql2, [req.body.userData.id],(err,rows)=>{
    //         console.log(rows);
    //     if(rows.length>0){
    //         res.json({result : 'duplicated'})
    //     }else{
    //           // 회원가입 시작!
    //         let sql = 'insert into tbl_member values(?,?,?)'
    //         conn.query(sql,[req.body.userData.id, req.body.userData.pw, req.body.userData.add],(err,rows)=>{
    //             if(rows){
    //                 console.log('joined successfully!');
    //                 res.json({result : 'success'})
    //             }else{
    //                 console.log('Failed to Join...');
    //                 res.json({result : 'failed'})
    //             }
    //         })
           
    //     }
    // })
    
})

router.post('/user/login',(req, res)=>{
    console.log('login Router!');

    let mb_id = 'mb_id 00412'
    let mb_pw = 'mb_pw 00412'

    // let {id, pw} = req.body
    let sql = "select * from tbl_member where mb_id = :mb_id and mb_pw = :mb_pw"

    oracledb.getConnection(db_config, (err, conn)=>{
        if(err) throw err;

        console.log('연결됨');
        conn.execute(sql,[mb_id,mb_pw],(err1,result)=>{
            if(err1) throw err1;
            console.log(result);
            console.log(result.rows[0]);
        })
    })













    // conn.query(sql,[req.body.userData.id, req.body.userData.pw], (err, rows)=>{
    //     console.log(rows);
    //     if(rows.length >0){
    //         res.json({result : 'success', id : req.body.userData.id})
    //     }else{
    //         res.json({result : 'failed'})
    //     }
    // })
})

module.exports = router;