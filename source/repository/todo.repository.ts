import { Repository, EntityRepository } from 'typeorm';

import { ToDo } from '../entities/ToDo.entity';

@EntityRepository(ToDo)
export class ToDoRepository extends Repository<ToDo> {}
