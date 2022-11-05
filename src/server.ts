import Fastify from 'fastify';

import { booksRoute } from './routes/books';

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(booksRoute);

  await fastify.listen({ port: 3333 });
}

bootstrap();