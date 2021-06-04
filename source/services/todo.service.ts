import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { IToDo } from '../interfaces/todo.interface';
import { ToDo } from '../entities/ToDo.entity';
import { ToDoRepository } from '../repository/todo.repository';
import { ToDoCreateDto } from '../dto/ToDo.dto';

@Service()
export default class SampleInjectedService {
    constructor(
        @InjectRepository(ToDo)
        private todoRepo: ToDoRepository
    ) {}

    async getAll() {
        try {
            return await this.todoRepo.find({});
        } catch (e) {
            throw new Error('No data Found');
        }
    }

    async getOne(id: string) {
        return this.todoRepo.findOne({ id });
    }

    create(todoData: ToDoCreateDto) {
        // Wrap it in try catch and throw exception
        return this.todoRepo.save(todoData);
    }
}
