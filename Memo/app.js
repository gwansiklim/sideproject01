const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Posts } = require('./models');

const port = 3000;
const router = require('./routes/router');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

// 모듈화한 route 불러오기
app.use("/api", router);

// 페이지 불러오기
app.get('/', function(req, res, next) {
  res.render('index');
});

app.get("/posts", async (req, res) => {
  res.render("post");
})

app.get("/detail/:postId", async (req, res) => {
  const {postId} = req.params;
  const posts = await Posts.findByPk(postId);
  res.render("detail",{posts});
});

// 3000번 포트로 연결
app.listen(port, () => {
  console.log(`서버 접속 http://localhost:${port}!`)
})
