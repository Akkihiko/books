import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.book.create({
    data: {
      title: "Inferno",
      author: "Dan Brown",
      shortDescription: "Langdon luta contra um adversário assustador e enfrenta um enigma engenhoso.",
      publishedAt: "14 de maio de 2013",
      genre: "Mistério"
    }
  });
}

main();