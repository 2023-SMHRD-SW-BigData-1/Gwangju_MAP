const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');
const db_config = require('../config/dbconfig');
const path = require('path');
const bodyParser = require('body-parser');

router.get('/', (req, res) => {
  console.log('index Router');
  res.send(path.join(__dirname, 'map/build/index.html'));
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

let region = '광산구';
let year = 2017;

// 1번 차트
router.get('/crimeCounter', (req, res) => {
  const { region: queryRegion, year: queryYear } = req.query;

  if (queryRegion) {
    region = queryRegion;
  }
  if (queryYear) {
    year = queryYear;
  }

  let sql = `select cctv_year "name", sum(sum(cctv_cnt)) over (order by cctv_year) "pv" from tbl_cctv where cctv_region like :region group by cctv_year`;
  let sql2 = `select crime_year "name", crime_count "uv" from tbl_crime where crime_region=:region order by crime_year`;

  oracledb.getConnection(db_config, (err, conn) => {
    if (err) throw err;

    conn.execute(sql, { region: region + '%' }, (err, result) => {
      if (err) throw err;

      conn.execute(sql2, { region }, (err, result2) => {
        if (err) throw err;

        let chart1 = result.rows;
        let chart2 = result2.rows;

        let mergedResult = chart1.map((row1, index) => {
          return {
            ...row1,
            uv: chart2[index].uv
          };
        });

        conn.release((err) => {
          if (err) throw err;
          res.send(mergedResult);
        });
      });
    });
  });
});

// 2번 차트
router.get('/lightCounter', (req, res) => {
  let sql = 'select light_region "name", light_cnt "uv" from tbl_light';

  oracledb.getConnection(db_config, (err, conn) => {
    if (err) throw err;

    conn.execute(sql, [], (err, result) => {
      if (err) throw err;

      conn.release((err) => {
        if (err) throw err;
      });

      res.send(result.rows);
    });
  });
});

//3번 차트
router.get('/third', (req, res) => {
   
  
    // let sql = `select crime_region "name", crime_count "pv" from tbl_crime where crime_year = :year`;
    let sql = `select crime_region "subject", pcrime "A" from tbl_crime where crime_year = :year`;
  
    oracledb.getConnection(db_config, (err, conn) => {
      if (err) throw err;
  
      conn.execute(sql, [year], (err, result) => {
        if (err) throw err;
  
       
          conn.release((err) => {
            if (err) throw err;
          });
  
      
            res.send(result.rows);
          });
  
        });

  });


// 4번차트

router.get('/fourth', (req, res) => {
    // const year = req.query.year || 2017; // URL 매개변수에서 year 값을 가져옴, 기본값은 2017
    // const region = req.query.region || '광산구'; // URL 매개변수에서 region 값을 가져옴, 기본값은 '광산구'
  
    const sql = [
      `select cat1 "살인" from tbl_crime where crime_year = :year and crime_region = :region`,
      `select cat2 "강도" from tbl_crime where crime_year = :year and crime_region = :region`,
      `select cat3 "강제추행" from tbl_crime where crime_year = :year and crime_region = :region`,
      `select cat4 "절도" from tbl_crime where crime_year = :year and crime_region = :region`,
      `select cat5 "폭력" from tbl_crime where crime_year = :year and crime_region = :region`
    ];
  
    oracledb.getConnection(db_config, (err, conn) => {
      if (err) throw err;
  
      // outFormat을 NUMBER로 설정하여 숫자 형식으로 조회 결과를 얻음
      conn.execute("ALTER SESSION SET NLS_NUMERIC_CHARACTERS = '.,'", [], (err) => {
        if (err) throw err;
  
        const bindParams = {
          year: year,
          region: region
        };
  
        const resultPromises = sql.map(query => {
          return new Promise((resolve, reject) => {
            conn.execute(query, bindParams, { outFormat: oracledb.OUT_FORMAT_OBJECT }, (err, result) => {
              if (err) reject(err);
              resolve(result.rows.map(row => ({ name: Object.keys(row)[0], value: row[Object.keys(row)[0]] })));
            });
          });
        });
  
        Promise.all(resultPromises)
          .then(results => {
            conn.release((err) => {
              if (err) throw err;
            });
  
            const mergedResult = results.reduce((merged, current) => {
              const mergedKeys = merged.map(obj => obj.name);
              const newKeys = current.map(obj => obj.name);
              const uniqueKeys = [...new Set([...mergedKeys, ...newKeys])];
  
              return uniqueKeys.map(key => {
                const matchingObj = merged.find(obj => obj.name === key);
                const newObj = current.find(obj => obj.name === key);
                return {
                  name: key,
                  value: matchingObj ? matchingObj.value : newObj.value
                };
              });
            });
  
            res.send(mergedResult);
          })
          .catch(err => {
            throw err;
          });
      });
    });
  });


// 5번차트
router.get('/five', (req, res) => {
  let sql = 'select s_gu "name", count(s_gu) "pv" from tbl_safetyhouse group by s_gu';

  oracledb.getConnection(db_config, (err, conn) => {
    if (err) throw err;

    conn.execute(sql, [], (err, result) => {
      if (err) throw err;

      conn.release((err) => {
        if (err) throw err;
      });

      res.send(result.rows);
    });
  });
});

router.post('/pages/Login/pages/Join', (req, res) => {
  console.log('Join Router!', req.body);

  let { mb_id, mb_pw, mb_nick } = req.body;

  oracledb.getConnection(db_config, (err, conn) => {
    if (err) throw err;

    let or = 'select mb_id from tbl_member where MB_ID = :mb_id';
    conn.execute(or, [mb_id], (err, result) => {
      if (err) throw err;

      if (result.rows.length > 0) {
        res.json({ result: 'duplicated' });
      } else {
        let od2 = 'insert into  tbl_member (MB_ID, MB_PW, MB_NICK) values (:mb_id, :mb_pw, :mb_nick)';
        conn.execute(od2, [mb_id, mb_pw, mb_nick], (err, result) => {
          if (err) {
            console.log('Failed to Join...');
            res.json({ result: 'failed' });
          } else {
            console.log('joined successfully!');
            res.json({ result: 'success' });
          }
        });
      }
    });
  });
});

router.post('/pages/login', (req, res) => {
  console.log('login Router!');

  let { mb_id, mb_pw } = req.body;
  let or3 = "select * from TBL_MEMBER where MB_ID = :MB_ID and MB_PW = :MB_PW";

  oracledb.getConnection(db_config, (err, conn) => {
    if (err) throw err;

    console.log('연결됨');
    res.json({ result: 'success' });
    conn.execute(or3, { mb_id, mb_pw }, (err1, result) => {
      if (err1) throw err1;
      console.log(result);
      console.log(result.rows[0]);
    });
  });
});

router.get("/boardList", (req, res) => {
    const sqlQuery = "select b_seq, b_title, mb_id, b_at from tbl_board";
    oracledb.getConnection(db_config,(err,conn)=>{
        if(err) throw err;
        conn.execute(sqlQuery,[],(err,result)=>{
            if(err) throw err;
            conn.release((err)=>{
                if(err) throw err;
                
                            res.send(result.rows)
                
                        })
                
                    })
                    })
                    
            })


module.exports = router;