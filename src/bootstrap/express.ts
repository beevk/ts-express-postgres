import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';

export default (app: Application): void => {
    if (!app) {
        return;
    }
    // use HelmetJS middleware
    app.use(helmet());

    /** Parse the body of all request */
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Enable Cross Origin Resource Sharing to all origins by default (for ease of development)
    // Maybe change this according to requirement
    app.use(cors());
};
