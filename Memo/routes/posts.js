var express = require('express');
var router = express.Router();
const { Posts, sequelize, Sequelize } = require('../models');


// 게시글 작성
router.post("/post", async (req, res) => {
  const { title, content} = req.body;
  await Posts.create({
    title,
    content,
  });
  res.status(200).send({
    message: "create success!!"
  });
});

// router.post("/post", async (req, res) => {
//   try {
//     const sql = `
//       INSERT INTO 
//       Posts
//       VALUES
//       ?, ?
//     `
//     console.log(sql);
//     await sequelize.query(sql, {type: Sequelize.QueryTypes.INSERT})
//     .then((result) => {
//       console.log("되냐",result);
//       res.send({
//         title: result[0].title,
//         content: result[0].content,
//       })
//     })

//   } catch(error) {
//     console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
//     res.status(400).send({
//         errorMessage: "형식이 잘못됐습니다.",
//     });
//   }
// });


module.exports = router;
