import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { Logger, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from '@shared/filters/exception-filter.filter';

import { AppModule } from './app.module';
import constants from './constants';

const logger = new Logger('MAIN');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // APP GLOBAL CONFIGS
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(compression());
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Queen Catalina API')
    .setDescription('The queen catalina API desceription')
    .addBearerAuth()
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document);

  await app.listen(constants.PORT);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
