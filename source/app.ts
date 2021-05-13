import express from 'express';

import morganMiddleware from './config/logging';

const app = express();

/** Log the request */
app.use(morganMiddleware);

/** Parse the body of all request */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

/** Routes go here */
app.use('/v1', (req, res) => res.send('Hello World'));

/** Error handling - 404 */
app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

export default app;
