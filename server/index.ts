import express from 'express';
const port = 5000;
const app = express();

app.get('/', (req, res) => {
    res.json({ status: 'OK' });
});

app.listen(port, () => {
    console.log('Control Panel server is listening on port: ' + port);
});