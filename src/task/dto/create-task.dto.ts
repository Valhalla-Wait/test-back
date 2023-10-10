import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({ description: "Note identifier", nullable: false })
    id: number;

    @ApiProperty({ description: "User identifier", nullable: true })
    userId: number;
    
    @ApiProperty({ description: "Note title", nullable: true })
    title: string;
    
    @ApiProperty({ description: "Note content", nullable: true })
    content: string;
}
