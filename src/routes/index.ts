import express, { RequestHandler } from 'express';

import { getStatus, headStatus } from '../controllers';
import v1Routes from './v1';

const router = express.Router();

// Routes for health check
router.head('/status', headStatus);
router.get('/status', getStatus);

// Keep on adding routes like this
router.use('/v1', v1Routes);

/** Error - 404 */
const notFoundController: RequestHandler = (_req, res) => {
    const error = new Error('Path Not found');
    return res.status(404).json({
        message: error.message
    });
};
router.use(notFoundController);

export default router;
