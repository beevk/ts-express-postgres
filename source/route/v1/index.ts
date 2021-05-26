import express from 'express';

const router = express.Router();

router.get('/ping', (_req, res) => {
    return res.status(200).json({ data: 'pong' });
});

export default router;
