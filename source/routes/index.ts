import express from 'express';

import v1Routes from './v1';

const router = express.Router();

// Routes for health check
router.head('/status', (_req, res) => {
    return res.status(200).end();
});
router.get('/status', (_req, res) => {
    return res.status(200).json({ data: 'Ok' });
});

// Keep on adding routes like this
router.use('/v1', v1Routes);

/** Error - 404 */
router.use((_req, res, _next) => {
    const error = new Error('Path Not found');
    return res.status(404).json({
        message: error.message
    });
});

export default router;
