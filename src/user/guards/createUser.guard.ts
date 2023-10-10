import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class CreateUserGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request:Request = context.switchToHttp().getRequest()
        if(request.params.id !== '1') return true
        else throw new HttpException('Пользователь не авторизован', HttpStatus.UNAUTHORIZED)
    }
}