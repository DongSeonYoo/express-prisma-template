import express from 'express';

const app = express();

// use global middleware
app.use(express.json());

app.use('/', (req, res, next) => {
    res.send('qwer');
});

export default app;
