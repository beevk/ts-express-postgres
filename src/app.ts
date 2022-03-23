import express, { Application } from 'express';
import 'reflect-metadata';
import ConfigureApp from './bootstrap';

export default async (): Promise<Application> => {
    const app = express();

    await ConfigureApp(app);

    return app;
};
