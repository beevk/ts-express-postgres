import express, { Express, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import morganMiddleware from '../middleware/logging';

export const ConfigureApp = async (app: Express) => {
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

    app.head('/status', (_req: Request, res: Response) => {
        return res.status(200).end();
    });

    app.get('/status', (_req: Request, res: Response) => {
        return res.status(200).json({ data: 'Ok' });
    });

    // Keep on adding route like this
    app.use('/v1', (_req: Request, res: Response) => {
        return res.status(200).json({ message: 'Coming Soon' });
    });

    /** Error handling - 404 */
    app.use((_req: Request, res: Response, _next: NextFunction) => {
        const error = new Error('Path Not found');
        return res.status(404).json({
            message: error.message
        });
    });

    /** Global catch block - 500 */

    const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
        return res.status(500).json({
            message: err.message
        });
    };
    app.use(ErrorHandler);
    // Don't add any middleware below this
};
