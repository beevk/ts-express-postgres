import express from 'express';
import { create, deleteOne, getAll, getOne, updateOne } from '../../controllers/todo.controller';
// import CreateTodoValidator from '../../validators/todo.validator';

const router = express.Router();

// Can add middleware here
// Also write API docs here
router.get('/', getAll);

router.post('/', create);

router.get('/:id', getOne);

router.put('/:id', updateOne);

router.delete('/:id', deleteOne);

export default router;
