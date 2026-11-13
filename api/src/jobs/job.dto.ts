import { Transform } from "class-transformer";
import { IsNotEmpty, MaxLength, IsString } from "class-validator";

export class JobDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(500)
    @Transform(({value}) => value.trim())
    texto: string;
}