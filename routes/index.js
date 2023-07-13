const express = require('express');
const router = express.Router();
const oracledb = require('oracledb')
const db_config = require('../config/dbconfig')
const path = require('path');
// const bodyParser = require("body-parser")
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}))


router.get('/', (req, res) => {
    console.log('index Router')
    res.send(path.join(__dirname, "map/build/index.html"))
})




//1번 차트

// router.get('/crimeCounter',(req,res)=>{
//     // 차트 데이터 받아오기
//     // 1번 차트 2개 받아오기
//     let sql = `select cctv_year "연도", sum(cctv_cnt) from tbl_cctv where cctv_region like '광산구%' group by cctv_year order by cctv_year; `
//     let sql2 = 'select crime_count "uv" from tbl_crime where crime_year=2017'
    
//     oracledb.getConnection(db_config,(err,conn)=>{
        
//         if(err) throw err;
        
//         conn.execute(sql,sql2,[],(err,result)=>{
//         // conn.execute(sq2,[],(err,result1)=>{
            
//             if(err) throw err;
//             conn.release((err)=>{
//                 if(err) throw err;
//             })
//         // })
//         let mergedResult = result.rows.map((row, index) => {
//             return {
//                 ...row,
//                 ...result2.rows[index]
//             };

//         })
//         res.send(mergedResult);
//     })
//     })
//     })
    
    // router.get('/crimeCounter', (req, res) => {
    //     // 1번 차트 데이터 받아오기
    //     let sql = `select cctv_year "연도", sum(cctv_cnt) from tbl_cctv where cctv_region like '광산구%' group by cctv_year order by cctv_year; `;
    //     let sql2 = `select crime_year "연도", crime_count "uv" from  tbl_crime where crime_region='광산구' order by crime_year`;
    
    //     oracledb.getConnection(db_config, (err, conn) => {
    //         if (err) throw err;
    
    //         conn.execute(sql, [], (err, result) => {
    //             if (err) throw err;
    
    //             conn.execute(sql2, [], (err, result2) => {
    //                 if (err) throw err;
    
    //                 conn.release((err) => {
    //                     if (err) throw err;
    //                 });
    
    //                 // 결과 합치기
    //                 let mergedResult = result.rows.map((row, index) => {
    //                     return {
    //                         ...row,
    //                         ...result2.rows[index]
    //                     };
    //                 });
    //                 res.send(mergedResult);
    //             });
    //         });
    //     });
    // });


   
// 2번 차트
router.get('/lightCounter',(req,res)=>{
    // 차트 데이터 받아오기
    // 1번 차트 2개 받아오기
    let sql = 'select light_region "name", light_cnt "uv" from tbl_light'


    oracledb.getConnection(db_config,(err,conn)=>{

        if(err) throw err;

        conn.execute(sql,[],(err,result)=>{

            if(err) throw err;

            conn.release((err)=>{
                if(err) throw err;
            })

            res.send(result.rows)

        })

    })
    })

// 3번 차트
// router.get('/third',(req,res)=>{
//     // 차트 데이터 받아오기
//     // 1번 차트 2개 받아오기
//     let sql = 'select light_region "name", light_cnt "uv" from tbl_light'


//     oracledb.getConnection(db_config,(err,conn)=>{

//         if(err) throw err;

//         conn.execute(sql,[],(err,result)=>{

//             if(err) throw err;

//             conn.release((err)=>{
//                 if(err) throw err;
//             })

//             res.send(result.rows)

//         })

//     })
//     })
    // 4번 차트
    // router.get('/fourth',(req,res)=>{
        //     // 차트 데이터 받아오기
        //     // 1번 차트 2개 받아오기
        //     let sql = ''
        
        
        //     oracledb.getConnection(db_config,(err,conn)=>{
            
            //         if(err) throw err;
            
            //         conn.execute(sql,[],(err,result)=>{

//             if(err) throw err;

//             conn.release((err)=>{
//                 if(err) throw err;
//             })

//             res.send(result.rows)

//         })

//     })
//     })

// 5번 차트
//    router.get('/five',(req,res)=>{
//             // 차트 데이터 받아오기
//             // 1번 차트 2개 받아오기
//             let sql = 'dfsf'
        
        
//             oracledb.getConnection(db_config,(err,conn)=>{
            
//                     if(err) throw err;
            
//                     conn.execute(sql,[],(err,result)=>{

//             if(err) throw err;

//             conn.release((err)=>{
//                 if(err) throw err;
//             })

//             res.send(result.rows)

//         })

//     })
//     })






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