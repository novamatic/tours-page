const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "..");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// providing client side render
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log('Server is up!')
});
