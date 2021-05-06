console.log("url", process.env.DATABASE_URL);
console.log(process.env.DIR);

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  connectionString: process.env.DATABASE_URL,
  entities: [__dirname + `/${process.env.DIR}/models/*{.ts,.js}`],
  migrations: [__dirname + `/${process.env.DIR}/database/migrations/*{.ts,.js}`],
  cli: {
    migrationsDir: `./src/database/migrations/`,
    entitiesDir: `src/models`,
  },
};
