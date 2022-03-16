import express from 'express';
import { Container } from 'typedi';
import SampleInjectedService from '../../services/sample.service';

const router = express.Router();

router.get('/ping', (_req, res) => {
    const serviceInstance = Container.get(SampleInjectedService);
    serviceInstance.printMessage();
    return res.status(200).json({ data: 'pong' });
});

export default router;
