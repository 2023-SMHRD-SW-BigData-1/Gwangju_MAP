const express = require('express');
const router = express.Router();
const oracledb = require('oracledb')
const db_config = require('../config/dbconfig')
const path = require('path');




router.get('/', (req, res) => {
    console.log('index Router')
    res.send(path.join(__dirname, "map/build/index.html"))
})






router.get('/crimeCounter',(req,res)=>{
    // 차트 데이터 받아오기
    // 1번 차트
    let sql = 'select cctv_gu "name", sum(cctv_cnt) "pv" from tbl_cctv where cctv_year<=2017 group by cctv_gu'
    // let sql2 = 'select crime_region "name", sum(pcrime) "uv" from tbl_crime where crime_year=2017 group by crime_region';


    oracledb.getConnection(db_config,(err,conn)=>{

        if(err) throw err;

        conn.execute(sql,[],(err,result)=>{

            if(err) throw err;

            conn.release((err)=>{
                if(err) throw err;
            })

            res.send(result.rows)

        })
        // conn,execute(sql2,[],(err,result)=>{

        //     if(err) throw err;

        //     conn.release((err)=>{
        //         if(err) throw err;
        //     })

        //     res.send(result.rows)

        // }))


        
    })
    })















// 회원가입

router.post('/pages/Login/pages/Join', (req, res) => {
    console.log('Join Router!', req.body)

    let { mb_id, mb_pw, mb_nick } = req.body;

    oracledb.getConnection(db_config, (err, conn) => {
        if (err) throw err;

        let or = 'select mb_id from tbl_member where MB_ID = :mb_id'
        conn.execute(or, [mb_id], (err, result) => {
            if (err) throw err;

            if (result.rows.length > 0) {
                res.json({ result: 'duplicated' })
            } else {
                // 회원가입 시작!
                let od2 = 'insert into  tbl_member (MB_ID, MB_PW, MB_NICK) values (:mb_id, :mb_pw, :mb_nick)'
                conn.execute(od2, [mb_id, mb_pw, mb_nick], (err, result) => {
                    if (err) {
                        console.log('Failed to Join...');
                        res.json({ result: 'failed' })
                    } else {
                        console.log('joined successfully!');
                        
                        res.json({ result: 'success' })
                        
                        
                    }
                })
            }
        })
    })
});




// 로그인

router.post('/pages/login',(req, res)=>{
    console.log('login Router!');

    //  let mb_id = req.body
    //  let mb_pw = req.body

    let { mb_id, mb_pw } = req.body;
    let or3 = "select * from TBL_MEMBER where MB_ID = :MB_ID and MB_PW = :MB_PW"

    oracledb.getConnection(db_config, (err, conn)=>{
        if(err) throw err;

        console.log('연결됨');
        res.json({ result: 'success' })
        conn.execute(or3,{mb_id,mb_pw},(err1,result)=>{
            if(err1) throw err1;
            console.log(result);
            console.log(result.rows[0]);

            // res.redirect('/');
        })
    })














   
    



})

module.exports = router;