const restify = require("restify");

const PORT = process.env.PORT || 3922;

let app = restify.createServer();

// function scopeMiddlewareTo(prefix, middleware) {
//   return function(req, res, next) {
//       console.log('middleware');
//     if (req.url.indexOf(prefix) === 0) {
//       req.url = req.url.slice(prefix.length);
//       return middleware.call(this, req, res, next);
//     }
//     else { return next(); }
//   };
// }

// app.use(scopeMiddlewareTo('/foo', require("./foo/app")));

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log('listening');
});