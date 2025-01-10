import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [HeroesModule, MongooseModule.forRoot('mongodb://root:example@localhost/heroes?authSource=admin')],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
