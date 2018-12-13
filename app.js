const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = '💻 Coding the World 🌍';
});

app.listen(3000);
