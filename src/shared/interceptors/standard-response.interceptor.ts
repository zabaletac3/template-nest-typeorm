import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StandardResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((responseData) => {
        const message = responseData?.message || 'Operation completed successfully';
        const data = responseData?.data || responseData;

        return {
          success: true,
          message: message,
          data: data ?? {},
          statusCode: context.switchToHttp().getResponse().statusCode,
          timestamp: new Date().toISOString(),
          path: context.switchToHttp().getRequest<Request>().url,
        };
      }),
    );
  }
}
