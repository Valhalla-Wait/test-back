import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class SpeedUserRes implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('Interceptor');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => ''),
      );
}}