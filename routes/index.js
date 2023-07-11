const express = require('express');
const router = express.Router();
const oracledb = require('oracledb')
const db_config = require('../config/dbconfig')
const path = require('path');


router.get('/', (req, res) => {
    console.log('index Router')
    res.send(path.join(__dirname, "map/build/index.html"))
})

// router.post('/user/Join', (req, res) => {
//     console.log('Join Router!',req.body)

//     let { mb_id, mb_pw, mb_nick } = req.body;

//     let or = 'select id from tbl_member where mb_id = :mb_id'
//     conn.query(or, {mb_id},(err,rows)=>{
//             console.log(rows);
//         if(rows.length>0){
//             res.json({result : 'duplicated'})
//         }else{
//               // 회원가입 시작!
//             let od2 = 'insert into tbl_member values(mb_id,mb_pw,mb_nick)'
//             conn.query(od2,[req.body.mb_id, req.body.mb_pw, req.body.mb_nick],(err,rows)=>{
//                 if(rows){
//                     console.log('joined successfully!');
//                     res.json({result : 'success'})
//                 }else{
//                     console.log('Failed to Join...');
//                     res.json({result : 'failed'})
//                 }
//             })
           
//         }
//     })
    
// })

router.post('/user/login',(req, res)=>{
    console.log('login Router!');

    //  let mb_id = req.body
    //  let mb_pw = req.body

    let { mb_id, mb_pw } = req.body;
    let or3 = "select * from tbl_member where mb_id = :mb_id and mb_pw = :mb_pw"


    oracledb.getConnection(db_config, (err, conn)=>{
        if(err) throw err;

        console.log('연결됨');
        conn.execute(or3,{mb_id,mb_pw},(err1,result)=>{
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