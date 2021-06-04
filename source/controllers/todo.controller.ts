import { RequestHandler } from 'express';
import { Container } from 'typedi';
import ToDoService from '../services/todo.service';

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
        return next(error);
    }
};

const create: RequestHandler = async (req, res) => {
    const serviceInstance = Container.get(ToDoService);
    const { body } = req;
    const data = await serviceInstance.create(body);
    return res.status(200).json({ data });
};

const updateOne: RequestHandler = async (req, res) => {
    const { params } = req;
    const { id } = params;
    return res.status(200).json({ data: `Updated ${id}` });
};

const deleteOne: RequestHandler = async (req, res) => {
    const { params } = req;
    const { id } = params;
    return res.status(200).json({ data: `Deleted ${id}` });
};

export { getAll, getOne, create, updateOne, deleteOne };
