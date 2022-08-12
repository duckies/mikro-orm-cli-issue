# mikro-orm-cli-issue

Demonstrates a `mikro-orm` with `nestjs` issue, possibly related to `pnpm` where installing `@mikro-orm/cli` will break injection of the `SqlEntityManager`.

## Steps to Reproduce

1. Clone repository.
2. `pnpm i`
3. `pnpm dev`

```
Error: Nest can't resolve dependencies of the AppService (?). Please make sure that the argument SqlEntityManager at index [0] is available in the AppModule context.
```

4. Remove the "@mikro-orm/cli" from the dependencies in `./packages/server/package.json`.
5. Run `pnpm i` again.
6. Run `pnpm dev`

```
[Nest] 7354  - 08/12/2022, 7:00:30 PM     LOG [NestFactory] Starting Nest application...
[Nest] 7354  - 08/12/2022, 7:00:30 PM     LOG [InstanceLoader] MikroOrmModule dependencies initialized +20ms
[info] MikroORM version: 5.3.1
[discovery] ORM entity discovery started, using ReflectMetadataProvider
[discovery] - processing 2 files
[discovery] - ignoring file user.entity.js
[discovery] - processing entity User (/home/john/github/test/packages/server/dist/entities/user.entity.js)
[discovery] - entity discovery finished, found 1 entities, took 51 ms
[info] MikroORM successfully connected to database rbp on postgresql://postgres@127.0.0.1:5432
[Nest] 7354  - 08/12/2022, 7:00:30 PM     LOG [InstanceLoader] MikroOrmCoreModule dependencies initialized +70ms
[Nest] 7354  - 08/12/2022, 7:00:30 PM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
AppService  [EntityManager<1>]
[Nest] 7354  - 08/12/2022, 7:00:30 PM     LOG [NestApplication] Nest application successfully started +6ms
```
