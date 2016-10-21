const restify = require("restify");
const PORT = 3923;

let app = restify.createServer();

app.get("/", (req, res)=> {
    res.send("foo");
});



app.listen(PORT, () => {
    console.log('listening');
});