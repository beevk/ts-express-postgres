import express from 'express';
import { ConfigureApp } from './bootstrap';

export default async () => {
    const app = express();

    await ConfigureApp(app);

    return app;
};
