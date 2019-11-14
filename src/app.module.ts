import { Module, NestMiddleware, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 所有的子moudle全部引入到总moudle
import { CatModule } from './cats/cats.module'
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { catController } from './cats/cats.controller';

@Module({
  imports: [CatModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    throw new Error("Method not implemented.");
  }
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('cats');
    consumer
      .apply(LoggerMiddleware)
      // 可注册多中间件
      // .apply(cors(), helmet(), logger)

      // 这里的forRoutes中可以为单字符，多字符，一个RouteInfo对象或者是个类
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      //排除指定路由
      // 有些场景下对控制器应用了中间件之后需要绕过其中几个方法，
      // 比如登录验证中间件应该放行登录路由，否则没有人能够登录成功。
      .exclude(
        { path: 'cats', method: RequestMethod.GET }
      )
      /* 上述代码都是针对固定的路由地址应用中间件，在NestJs中路由地址是通过装饰器定义的，
       * 如果控制器的路由地址有变化，而中间件这里没有跟着改掉，就会导致问题
       */
     .forRoutes(catController) // 基于控制器来注册的方式
  }
  // path 可以用作基于模式的路由 可食用通配符* 例如: 'ab*cd'
}
