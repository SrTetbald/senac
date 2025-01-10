import { Injectable } from '@nestjs/common';
import { Hero } from './heroes.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class HeroesService {
    constructor(
        @InjectModel('Hero') private readonly heroModel: Model<Hero>
        ){}

    async findall():Promise <Hero[]> {
        return this.heroModel.find().exec();
    }

    async findById(id: String): Promise <Hero>{
        return this.heroModel.findById(id).exec();
    }

    async create(hero: Hero): Promise<Hero>{ 
        const createHero = new this.heroModel(hero);

        return createHero.save();
    }

    async update(id: String, hero: Hero): Promise <Hero>{
        return this.heroModel.findByIdAndUpdate(id, hero,{new: true}).exec();
    }

    async delete(id: String): Promise<any>{
        return this.heroModel.findByIdAndDelete(id).exec();
    }

}
