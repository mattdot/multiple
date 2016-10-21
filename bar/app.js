const restify = require("restify");
const PORT = 3922;

let app = restify.createServer();

app.get("/", (req, res)=> {
    res.send("bar");
});

app.listen(PORT, () => {
    console.log('listening');
});