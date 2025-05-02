import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../task-status.enum";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class GetTasksFilterDto {
    @ApiPropertyOptional({ enum: TaskStatus, description: 'Filter tasks by status' })
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;

    @ApiPropertyOptional({ description: 'Search in the title or description' })
    @IsOptional()
    @IsString()
    search?: string;
}