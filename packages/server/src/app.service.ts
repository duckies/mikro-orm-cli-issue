import { SqlEntityManager } from '@mikro-orm/postgresql';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly em: SqlEntityManager) { }

  onModuleInit() {
    console.log('AppService ', this.em)
  }
}
