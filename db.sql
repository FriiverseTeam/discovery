-- Adminer 5.4.1 PostgreSQL 18.0 dump

CREATE DATABASE "discovery";
\connect "discovery";

DROP TABLE IF EXISTS "endpoints";
DROP SEQUENCE IF EXISTS endpoints_id_seq;
CREATE SEQUENCE endpoints_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 2 CACHE 1;

CREATE TABLE "public"."endpoints" (
    "id" integer DEFAULT nextval('endpoints_id_seq') NOT NULL,
    "host" character varying(255) NOT NULL,
    "api_host" character varying(255) NOT NULL,
    "portal_host" character varying(255) NOT NULL,
    "n3ds_host" character varying(255) NOT NULL,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "endpoints_pkey" PRIMARY KEY ("id")
)
WITH (oids = false);

TRUNCATE "endpoints";
INSERT INTO "endpoints" ("id", "host", "api_host", "portal_host", "n3ds_host", "created_at", "updated_at") VALUES
(1,	'api.innoverse.club',	'api.innoverse.club',	'fvportal.innoverse.club',	'n3ds.innoverse.club',	'2025-11-08 14:58:17.138875',	'2025-11-08 14:58:17.138875');

-- 2025-11-08 15:00:19 UTC