import express, { Express, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import morganMiddleware, { logError } from '../utils/logging';
import router from '../routes';

const ConfigureApp = (app: Express): void => {
    if (!app) {
        return;
    }

    // Connect to DB first

    // use HelmetJS middleware
    app.use(helmet());

    /** Log each request */
    app.use(morganMiddleware);

    /** Parse the body of all request */
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());

    app.use('/', router);

    /** Global catch block - 500 */
    const ErrorHandler = (err: Error, req: Request, res: Response, _: NextFunction) => {
        logError(err.message);
        return res.status(500).json({
            message: err.message
        });
    };
    app.use(ErrorHandler);
    // Don't add any middleware below this
};

export default ConfigureApp;
