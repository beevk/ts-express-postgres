import { RequestHandler } from 'express';
import { Container } from 'typedi';
import ToDoService from '../services/todo.service';
// import { ToDoCreateDto } from '../../dto/ToDoDto';

const getAll: RequestHandler = async (_req, res) => {
    const serviceInstance = Container.get(ToDoService);
    const data = await serviceInstance.getAll();
    return res.status(200).json({ data });
};

const getOne: RequestHandler = async (req, res, next) => {
    const serviceInstance = Container.get(ToDoService);
    const { params } = req;
    const { id } = params;
    try {
        const data = await serviceInstance.getOne(id);
        return res.status(200).json({ data });
    } catch (e) {
        const error = new Error('Not Found');
        next(error);
    }
};

const create: RequestHandler = async (req, res) => {
    const serviceInstance = Container.get(ToDoService);
    const { body } = req;
    const data = await serviceInstance.create(body);
    return res.status(200).json({ data });
};

const updateOne: RequestHandler = async (req, res) => {
    return res.status(200).json({ data: 'OK' });
};

const deleteOne: RequestHandler = async (req, res) => {};

export { getAll, getOne, create, updateOne, deleteOne };
