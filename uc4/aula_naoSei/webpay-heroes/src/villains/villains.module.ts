import { Module } from '@nestjs/common';
import { VillainsController } from './villains.controller';
import { VillainService } from './villains.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VillainSchema } from './model/villain.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Villain', schema: VillainSchema}])],
  controllers: [VillainsController],
  providers: [VillainService]
})
export class VillainsModule {}