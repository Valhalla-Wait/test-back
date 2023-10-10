import { ArgumentMetadata, BadRequestException, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { Request } from "express";

// @Injectable()
export class ValidateParamIdPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {
        const convertToNum = Number(value)
        if(convertToNum) return convertToNum
        else throw new BadRequestException('param id uncorrect')
    }
}