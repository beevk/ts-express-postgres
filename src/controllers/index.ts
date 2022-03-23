import { RequestHandler } from 'express';

const getStatus: RequestHandler = (_req, res) => res.status(200).json({ data: 'Ok' });

const headStatus: RequestHandler = (_req, res) => res.status(200).end();

export { getStatus, headStatus };
