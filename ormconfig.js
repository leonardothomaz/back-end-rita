const compiled = process.env.compiled;
console.log("url", process.env.DATABASE_URL, "compilado", compiled);

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  connectionString: process.env.DATABASE_URL,
  entities: [
    `./${compiled ? "dist" : "src"}/models/*.${compiled ? "js" : "ts"}`,
  ],
  migrations: [
    `./${compiled ? "dist" : "src"}/database/migrations/*.${
      compiled ? "js" : "ts"
    }`,
  ],
  cli: {
    migrationsDir: `./src/database/migrations/`,
    entitiesDir: `src/models`,
  },
};
