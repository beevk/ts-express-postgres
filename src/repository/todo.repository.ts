import { Repository, EntityRepository } from 'typeorm';

import ToDo from '../entities/ToDo.entity';

@EntityRepository(ToDo)
export default class ToDoRepository extends Repository<ToDo> {}
