import { type Config } from "drizzle-kit";

import { env } from "./src/env";

export default {
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  tablesFilter: ["dad_dishes_*"],
} satisfies Config;
