import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';

import ToDo from '../entities/ToDo.entity';
import ToDoRepository from '../repository/todo.repository';
import { IToDo } from '../interfaces/todo.interface';

// Write another service class for basic CRUD operation that these service classes can extend
@Service()
export default class SampleInjectedService {
    constructor(
        @InjectRepository(ToDo)
        private todoRepo: ToDoRepository
    ) {}

    async getAll(): Promise<IToDo[]> {
        try {
            return await this.todoRepo.find({});
        } catch (e) {
            throw new Error('No data Found');
        }
    }

    async getOne(id: string): Promise<IToDo> {
        const data = await this.todoRepo.findOne({ id });
        if (!data) {
            // Write new error handler for 404
            throw new Error('Not Found');
        }
        return data;
    }

    create(todoData: IToDo): Promise<IToDo> {
        // Wrap it in try catch and throw exception
        return this.todoRepo.save(todoData);
    }
}
