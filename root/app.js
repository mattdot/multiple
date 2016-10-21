const restify = require("restify");
const PORT = process.env.PORT || 3920;

let app = restify.createServer();

app.get("/", (req, res)=> {
    res.send("root");
});

app.listen(PORT, () => {
    console.log('listening');
});