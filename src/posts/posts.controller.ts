import { Controller, Get, Req } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get()
    index() {
       return[
            {
                title: 'hello ~'
            }
        ];
    }
}
