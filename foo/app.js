const restify = require("restify");
const PORT = process.env.PORT || 3922;

let app = restify.createServer();

app.get("/", (req, res)=> {
    res.send("foo");
});



app.listen(PORT, () => {
    console.log('listening');
});