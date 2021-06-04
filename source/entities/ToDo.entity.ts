import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsBoolean, IsOptional, Max, Min } from 'class-validator';

@Entity()
export default class ToDo {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ length: 100 })
    @Min(2)
    @Max(100)
    title!: string;

    @Column({ default: false })
    @IsBoolean()
    isCompleted!: boolean;

    @Column({ length: 300, nullable: true })
    @IsOptional()
    @Min(2)
    @Max(100)
    description?: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    createdAt?: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt?: Date;
}
