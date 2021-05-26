import express from 'express';
import { ConfigureApp } from './bootstrap';

export default () => {
    const app = express();

    ConfigureApp(app);

    return app;
};
