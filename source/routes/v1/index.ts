import express from 'express';
import todoRoutes from './todo.router';

const router = express.Router();

// all ${baseURL}/v1/todo goes here
router.use('/todo', todoRoutes);

export default router;
