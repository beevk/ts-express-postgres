import express, { Express } from 'express';
import 'reflect-metadata';
import ConfigureApp from './bootstrap';

export default async (): Promise<Express> => {
    const app = express();

    await ConfigureApp(app);

    return app;
};
