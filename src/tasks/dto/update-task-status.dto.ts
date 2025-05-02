import { IsEnum } from "class-validator";
import { TaskStatus } from "../task-status.enum";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateTaskStatusDto {
    @ApiProperty({ enum: TaskStatus, description: 'Update status for the task' })
    @IsEnum(TaskStatus)
    status: TaskStatus;
}