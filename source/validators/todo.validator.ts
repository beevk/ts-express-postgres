// Make it a validator function instead of
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class CreateTodoValidator {
    @IsString()
    @Length(2, 100)
    title!: string;

    @IsBoolean()
    isCompleted?: boolean;

    @IsOptional()
    @IsString()
    @Length(3, 300, { message: 'Description must be between 3 and 300 characters.' })
    description?: string;
}
