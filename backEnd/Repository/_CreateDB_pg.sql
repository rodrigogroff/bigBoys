
CREATE TABLE IF NOT EXISTS public."User" ( id bigserial NOT NULL, PRIMARY KEY (id)) WITH (OIDS = FALSE);
ALTER TABLE public."User" OWNER to postgres;
ALTER TABLE public."User" ADD COLUMN if not exists "stEmail" character varying(250);
ALTER TABLE public."User" ADD COLUMN if not exists "stMobile" character varying(250);
ALTER TABLE public."User" ADD COLUMN if not exists "bActive" boolean;
ALTER TABLE public."User" ADD COLUMN if not exists "stName" character varying(250);
ALTER TABLE public."User" ADD COLUMN if not exists "dtJoin" timestamp without time zone;
ALTER TABLE public."User" ADD COLUMN if not exists "dtLastLogin" timestamp without time zone;

CREATE TABLE IF NOT EXISTS public."UserSale" ( id bigserial NOT NULL, PRIMARY KEY (id)) WITH (OIDS = FALSE);
ALTER TABLE public."UserSale" OWNER to postgres;
ALTER TABLE public."UserSale" ADD COLUMN if not exists "fkUser" int;
ALTER TABLE public."UserSale" ADD COLUMN if not exists "nuSaleId" int;
ALTER TABLE public."UserSale" ADD COLUMN if not exists "vrPrice" int;
ALTER TABLE public."UserSale" ADD COLUMN if not exists "stGMap" character varying(999);
ALTER TABLE public."UserSale" ADD COLUMN if not exists "dtRegister" timestamp without time zone;
ALTER TABLE public."UserSale" ADD COLUMN if not exists "dtProduction" timestamp without time zone;
ALTER TABLE public."UserSale" ADD COLUMN if not exists "dtMail" timestamp without time zone;
ALTER TABLE public."UserSale" ADD COLUMN if not exists "nuSaleStage" int;
ALTER TABLE public."UserSale" ADD COLUMN if not exists "bActive" boolean;
