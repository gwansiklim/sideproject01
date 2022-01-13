var express = require('express');
var router = express.Router();
const { Posts, Sequelize, sequelize } = require('../models');
const {Op} = Sequelize;

//게시글 전부 불러오기
// router.get("/get", async (req, res) => {
//   const posts = await Posts.findAll({
//     order: [
//       ["createdAt", "DESC"]
//   ],
//   });
//   res.json(posts);
// });

router.get("/get", async (req, res) => {
  try{
    const sql = `
    SELECT *
    FROM Posts
    ORDER BY createdAt DESC;
  `
  await sequelize.query(sql, {type: Sequelize.QueryTypes.SELECT})
  .then((result) => {
    res.status(200).send({result})
  })
  } catch(error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    res.status(400).send({
        errorMessage: "형식이 잘못됐습니다.",
    });
  }
  
});

module.exports = router;
