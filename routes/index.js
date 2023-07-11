const express = require('express');
const router = express.Router();
const oracledb = require('oracledb')
const db_config = require('../config/dbconfig')
const path = require('path');




router.get('/', (req, res) => {
    console.log('index Router')
    res.send(path.join(__dirname, "map/build/index.html"))
})



router.post('/user/Join', (req, res) => {
    console.log('Join Router!', req.body)

    let { mb_id, mb_pw, mb_nick } = req.body;

    oracledb.getConnection(db_config, (err, conn) => {
        if (err) throw err;

        let or = 'select MB_ID from TBL_MEMBER where MB_ID = :mb_id'
        conn.execute(or, [mb_id], (err, result) => {
            if (err) throw err;

            if (result.rows.length > 0) {
                res.json({ result: 'duplicated' })
            } else {
                // 회원가입 시작!
                let od2 = 'insert into  TBL_MEMBER (MB_ID, MB_PW, MB_NICK) values (:MB_ID, :MB_PW, :MB_NICK)'
                conn.execute(od2, [mb_id, mb_pw, mb_nick], (err, result) => {
                    if (err) {
                        console.log('Failed to Join...');
                        res.json({ result: 'failed' })
                    } else {
                        console.log('joined successfully!');
                        
                        res.json({ result: 'success' })
                        res.redirect('http://localhost:8888');
                        
                    }
                })
            }
        })
    })
});






router.post('/user/login',(req, res)=>{
    console.log('login Router!');

    //  let mb_id = req.body
    //  let mb_pw = req.body

    let { mb_id, mb_pw } = req.body;
    let or3 = "select * from TBL_MEMBER where MB_ID = :MB_ID and MB_PW = :MB_PW"

    oracledb.getConnection(db_config, (err, conn)=>{
        if(err) throw err;

        console.log('연결됨');
        // res.redirect('http://localhost:3000');
        conn.execute(or3,{mb_id,mb_pw},(err1,result)=>{
            if(err1) throw err1;
            console.log(result);
            console.log(result.rows[0]);

            // res.redirect('/');
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