import { IsNotEmpty } from "class-validator";

export class UpdateTaskDescriptionDto {
    @IsNotEmpty()
    description: string;
}