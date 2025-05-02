import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateTaskDescriptionDto {
    @ApiProperty({ description: 'Update description for the task' })
    @IsNotEmpty()
    description: string;
}