import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schemas/*.schema.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
