DROP INDEX "Post_name_idx";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "handle" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "content" text NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "handle" text NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "like" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "image" text;--> statement-breakpoint
CREATE INDEX "Post_handle_idx" ON "posts" USING btree ("handle");--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN "name";