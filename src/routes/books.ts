import { FastifyInstance } from 'fastify';
import { z } from 'zod';

import { prisma } from '../lib/prisma';

export async function booksRoute(fastify: FastifyInstance) {
  fastify.get('/books/list', async (request, reply) => {
    const booksData = await prisma.book.findMany({
      orderBy: {
        title: 'asc'
      }
    });

    return reply.send({ booksData });
  });

  fastify.get('/books/list/:id', async (request, reply) => {
    const getBookParams = z.object({
      id: z.string(),
    });

    const { id } = getBookParams.parse(request.params);

    const bookData = await prisma.book.findUnique({
      where: {
        id,
      },

      select: {
        title: true,
        shortDescription: true,
        author: true,
        publishedAt: true,
        genre: true,
      }
    });

    return reply.send({ bookData });
  });

  fastify.post('/books', async (request, reply) => {
    const createBookBody = z.object({
      title: z.string(),
      shortDescription: z.string(),
      author: z.string(),
      publishedAt: z.string(),
      genre: z.string()
    });

    const { 
      title, 
      shortDescription, 
      author, 
      publishedAt, 
      genre 
    } = createBookBody.parse(request.body);

    try {
      await prisma.book.create({
        data: {
          title,
          shortDescription,
          author,
          publishedAt,
          genre
        }
      });

      return reply.code(201).send({ message: 'Book created in database!' })
    } catch(err) {
      console.log(err);

      return reply.code(400).send({ message: 'Something happened. Check terminal for more informations.' })
    }
  });

  fastify.put('/books/:id', async (request, reply) => {
    const bookId = z.object({ id: z.string() });

    const editBookBody = z.object({
      title: z.string(),
      shortDescription: z.string(),
      author: z.string(),
      publishedAt: z.string(),
      genre: z.string()
    });

    const {
      title, 
      shortDescription, 
      author, 
      publishedAt, 
      genre 
    } = editBookBody.parse(request.body);

    const { id } = bookId.parse(request.params);

    try {
      await prisma.book.update({
        where: {
          id
        },

        data: {
          title,
          shortDescription,
          author,
          publishedAt,
          genre
        }
      });

      return reply.code(201).send({ message: 'Book updated in database!', bookId: id })
    } catch(err) {
      console.log(err);

      return reply.code(400).send({ message: 'Something happened. Check terminal for more informations.' })
    }
  });

  fastify.delete('/books/:id', async(request, reply) => {
    const bookId = z.object({
      id: z.string()
    });

    const { id } = bookId.parse(request.params);

    try {
      await prisma.book.delete({
        where: {
          id
        },
      });

      return reply.code(204).send({ message: 'Book deleted from database!' });
    } catch(err) {
      console.log(err);

      return reply.code(400).send({ message: 'Something happened. Check terminal for more informations.' });
    }
  });
}