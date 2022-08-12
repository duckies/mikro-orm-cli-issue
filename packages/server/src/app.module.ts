import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  imports: [MikroOrmModule.forRoot({
    type: 'postgresql',
    dbName: 'rbp',
    entities: ['**/*/*.entity.js'],
    debug: true,
  }),
  ],
  providers: [AppService]
})
export class AppModule { }
