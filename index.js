var express = require('express'),
    app = express();
var webHookRoutes = require("./routes/webhooks")
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
    //integrating front end with 
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get("/", (req, res) => {
    res.send('hello');
})
app.use("/webhooks", webHookRoutes)
app.listen(3000, () => {
    console.log("APP RUNNING")
});