import { Controller, Get, Req, Post, Delete, HttpCode, Header, Redirect, Query, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dtos/create-cat.dto'
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class catController {
  constructor(private readonly catsService: CatsService) {} // CatsService

  @Post() // 接受post 并调用创建实例
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get() // 调用获取
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  //====================below is first controller test

  // @Get()
  // finall(@Req() request:Request): string { // 带参数
  //   console.log(request);
  //   return 'This action return all cats';
  // }

  // @Post()
  // @HttpCode(201) // 状态码返回
  // @Header('Cache-Control', 'none')
  // create(): string {
  //   return 'this action add a new cat';
  // }

  // 状态码也可使用@Res修饰符来进行
  // @Post()
  // res2(@Res() res: Response) {
    // res.status(HttpStatus.CREATED).send();
  // } 

  // @Get('c*s') // 通配符 可正则
  // @Redirect('https://www.baidu.com', 302) //重定向 { url: string, statusCode: number }

  // 重定向地址可通过返回值进行改变
  // @Get('cats')
  // @Redirect('url1', 302)
  // getNewUrl(@Query('isNew') isNew) {
  //   if (isNew) {
  //     return { url: 'url2' };
  //   }
  // }

  // 对于DTO的传输== @All @Get @Post @Put @Patch ....
  // @Post()
  // toCreate(@Body() createCatDto: CreateCatDto) {
  //   return `create a new cat ${createCatDto}`;
  // }
  
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `find it ${id}`;
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}