import { Express, Request, Response } from 'express';

import morganMiddleware, { logError } from '../utils/logging';
import router from '../routes';
import configureExpress from './express';
import configureDB from './configureDB';

export default async (app: Express): Promise<void> => {
    if (!app) {
        return;
    }

    // Connect to DB
    await configureDB();

    // Add express middlewares
    configureExpress(app);

    /** Log each incoming request */
    app.use(morganMiddleware);

    // Routes are served from here
    app.use('/', router);

    /** Global catch block - 500 */
    const ErrorHandler = (err: Error, _req: Request, res: Response) => {
        logError(`Error 500: ${err}`);
        return res.status(500).json({
            message: err.message
        });
    };
    app.use(ErrorHandler);
    // Don't add any middleware below this
};
