const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({ message: "Test Success" })
})

require("./route/route.js")(app)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})