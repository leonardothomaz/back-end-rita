const compiled = process.env.compiled;
console.log("url", process.env.DATABASE_URL, "compilado", compiled);

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  connectionString: process.env.DATABASE_URL,
  entities: [__dirname + `/src/models/*{.ts,.js}`],
  migrations: [__dirname + `/src/database/migrations/*{.ts,.js}`],
  cli: {
    migrationsDir: `./src/database/migrations/`,
    entitiesDir: `src/models`,
  },
};
