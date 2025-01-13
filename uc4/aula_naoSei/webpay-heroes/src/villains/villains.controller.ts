import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { VillainService } from './villains.service';
import { Villain } from './villains.model';
import { get } from 'mongoose';

@Controller('villains')
export class VillainsController {
    constructor (private readonly heroService: VillainService){}

    @Get()
    findALL(): Promise <Villain[]>{
        return this.heroService.findall();
    }

    @Get(':id')
    findById(@Param('id')id: string): Promise <Villain> {
        return this.heroService.findById(id);
    }

    @Post()
    create(@Body()villain:Villain): Promise <Villain>{
        return this.heroService.create(villain);
    }



}
