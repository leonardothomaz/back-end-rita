const compiled = process.env.compiled;

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
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
  },
};
