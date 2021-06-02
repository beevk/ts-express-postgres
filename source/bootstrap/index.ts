import { Express, NextFunction, Request, Response } from 'express';

import morganMiddleware, { logError } from '../utils/logging';
import router from '../routes';
import configureExpress from './express';

export const ConfigureApp = (app: Express) => {
    if (!app) {
        return;
    }

    // Connect to DB first

    configureExpress(app);

    /** Log each request */
    app.use(morganMiddleware);

    app.use('/', router);

    /** Global catch block - 500 */
    const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
        logError(`Error 500: ${err}`);
        return res.status(500).json({
            message: err.message
        });
    };
    app.use(ErrorHandler);
    // Don't add any middleware below this
};
