import { Injectable } from '@nestjs/common';
import { Villain } from './villains.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class VillainService {
    constructor(
        @InjectModel('Villain') private readonly villainModel: Model<Villain>
        ){}

    async findall():Promise <Villain[]> {
        return this.villainModel.find().exec();
    }

    async findById(id: String): Promise <Villain>{
        return this.villainModel.findById(id).exec();
    }

    async create(villain: Villain): Promise<Villain>{ 
        const createVillain = new this.villainModel(villain);

        return createVillain.save();
    }

    async update(id: String, villain: Villain): Promise <Villain>{
        return this.villainModel.findByIdAndUpdate(id, villain,{new: true}).exec();
    }

    async delete(id: String): Promise<any>{
        return this.villainModel.findByIdAndDelete(id).exec();
    }

}
