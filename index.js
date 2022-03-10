const express = require('express')
const app = express()
const port = 3000

const connect = require('./schemas');
connect();

// const goodsRouter = require('./routes/goods');
// const userRouter = require('./routes/user')

const goodsRouter = require("./routers/goods");
app.use("/api", [goodsRouter]);

// 미들웨어 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));

// app.use('/goods', goodsRouter)
// app.use('/user', userRouter)

app.use((req, res, next) => {
  console.log(req);
  next();
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  let name = req.query.name;
  res.render('test', {name});
})

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html>\
  <html lang="en">\
  <head>\
      <meta charset="UTF-8">\
      <meta http-equiv="X-UA-Compatible" content="IE=edge">\
      <meta name="viewport" content="width=device-width, initial-scale=1.0">\
      <title>Document</title>\
  </head>\
  <body>\
      Hi. I am with html<br>\
      <a href="/hi">Say Hi!</a>\
  </body>\
  </html>')
})

app.get('/home', (req, res) => {
  res.render('index');
})

app.get('/detail', (req, res) => {
  let goodsId = req.query.goodsId;
  res.render('detail', {goodsId});
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})