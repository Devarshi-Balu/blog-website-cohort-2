const express = require('express');
const cors = require('cors');


const app = express();

const port = 3000;

app.use(cors());
app.listen(port, () => {
    console.log(`app is listening on the port - ${port}`);
})

app.get('/user', (req, res) => {
    res.status(200).json({
        msg: "request processsed successfully"
    })
});

app.post('/user', (req, res) => {
    res.status(400).json({
        msg: "request is rejected"
    });
});

