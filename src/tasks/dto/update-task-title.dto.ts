import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateTaskTitleDto {
    @ApiProperty({ description: 'Update title for the task' })
    @IsNotEmpty()
    title: string;
}