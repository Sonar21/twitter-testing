import { like } from "drizzle-orm";
import { pgTable, serial, text, timestamp, index, integer } from "drizzle-orm/pg-core"
import { handle } from "hono/vercel";

export const posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    content:text("content").notNull(),
    handle:text("handle").notNull(),
    like:integer("like").notNull(),
    image:text("image"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  },
  (table) => [
    index("Post_handle_idx").on(table.handle)
  ]
)


export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    clerkId: text("clerkId").notNull(),
    email: text("email"), // Remove notNull()
    name: text("name").notNull(),
    handle: text("handle"), // Remove notNull()
    avatarUrl: text("avatarUrl").notNull(),
    bio: text("bio"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  },
  (table) => [index("User_email_idx").on(table.email)]
);