import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VillainsModule } from './villains/villains.module';



@Module({
  imports: [VillainsModule, MongooseModule.forRoot('mongodb://root:example@localhost/villains?authSource=admin'), HeroesModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
