import { Module,Global } from '@nestjs/common';
import { catController } from './cats.controller';
import { CatsService } from './cats.service';

// @Global() // 可注册为全局模块 添加后全局可使用CatsService，不包含CatModule
@Module({
  imports: [], // 本模块导入的模块，如果需要使用到其他模块的服务提供者，此处必须导入其他模块
  // imports: [CatsService], // module re-export 可先引入其他模块 然后将其共享
  controllers: [ catController ], // 控制器列表，本模块可用，用来绑定路由访问
  providers: [CatsService], // service 注册服务提供者，可以是services,factory等等
  exports: [CatsService] // exports后导出 可为共享模块
})
export class CatModule {}


// 动态模块
/*
  如果我们需要动态声明我们的模块
  比如数据库模块，连接成功我才返回模块，此时需要使用动态模块来处理。
  使用[模块名.forRoot()]方法来返回模块定义，通过该方式定义的即为动态模块
*/

