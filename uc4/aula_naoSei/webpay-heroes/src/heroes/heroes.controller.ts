import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { Hero } from './heroes.model';


@Controller('heroes')
export class HeroesController {

    constructor (private readonly heroService: HeroesService){}

    @Get()
    findALL(): Promise <Hero[]>{
        return this.heroService.findall();
    }

    @Get(':id')
    findById(@Param('id')id: string): Promise <Hero> {
        return this.heroService.findById(id);
    }

    @Post()
    create(@Body()hero:Hero): Promise <Hero>{
        return this.heroService.create(hero);
    }

    @Patch()
    update(@Param('id')id:string, @Body() hero: Hero): Promise<Hero>{
        return this.heroService.update(id, hero)
    }
    @Delete()
    delete(@Param('id')id:string): Promise<any>{
        return this.heroService.delete(id);
    }
}
