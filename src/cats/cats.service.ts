import { Injectable, HttpService, Optional, Inject } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';
import { exportAllDeclaration } from '@babel/types';

// Services层来写业务逻辑，分离Model层不应该做的事情
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}

// 可选Provider
// @Injectable()
// export class HttpService<T> {
//   constructor(
//     @Optional() @Inject('HTTP_OPTIONS') private readonly httpClient: T
//   ) {}
// }