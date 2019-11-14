import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 中间件全局注册 
  // app.use(LoggerMiddleware);
  // 异常过滤器全局注册 WARNING
  // The useGlobalFilters() method does not set up filters for gateways or hybrid applications.
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
