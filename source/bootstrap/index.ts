import express, { Express, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import morganMiddleware from '../utils/logging';
import router from '../route';

export const ConfigureApp = (app: Express) => {
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
    const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
        return res.status(500).json({
            message: err.message
        });
    };
    app.use(ErrorHandler);
    // Don't add any middleware below this
};
