/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'
// const winston = require('winston');

Route.get('/', async ({logger}) => {
  // const papertrail = new winston.transports.Http({
  //   host: 'logs.papertrailapp.com:54194',
  //   port:'54194',
  //   colorize: true,
  //   handleExceptions: true,
  //   auth: { username: new String('Akpagniaugustin@gmail.com'), password: 'et45=AZERTY' },
  //   ssl: true,
  // });

  // const logger = winston.createLogger({
  //   transports: [papertrail],
  // });

  logger.info('hello papertrail');
  logger.warn('An warn message')
  logger.error('An error message')
  logger.error('An error message 2')
  logger.error('An error message3')
  logger.error('An error message4')
  return { hello: 'world' }
})
