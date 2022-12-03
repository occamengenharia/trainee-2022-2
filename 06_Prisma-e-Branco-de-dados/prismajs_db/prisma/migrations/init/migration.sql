-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "birthDate" DATE NOT NULL,
    "id_nationality" INTEGER NOT NULL,
    "password" VARCHAR(50) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Nationality" (
    "id_nationality" SERIAL NOT NULL,
    "country" VARCHAR(50) NOT NULL,

    CONSTRAINT "Nationality_pkey" PRIMARY KEY ("id_nationality")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_nationality_fkey" FOREIGN KEY ("id_nationality") REFERENCES "Nationality"("id_nationality") ON DELETE RESTRICT ON UPDATE CASCADE;

