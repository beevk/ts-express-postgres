import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToDo {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ length: 100 })
    title!: string;

    @Column({ default: false })
    isCompleted?: boolean;

    @Column({ length: 300, nullable: true })
    description?: string;
}
