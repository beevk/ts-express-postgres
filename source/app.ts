import express, { Express } from 'express';
import 'reflect-metadata';
import configureApp from './bootstrap';

export default async (): Promise<Express> => {
    const app = express();

    await configureApp(app);

    return app;
};
