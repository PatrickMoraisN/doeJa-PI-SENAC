import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import AppError from '@/shared/errors/AppError';
import '@shared/infra/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (
    error: Error,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) => {
    if (error instanceof AppError) {
      return response.status(400).json({
        status: 'error',
        error: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

app.listen(3334, () => {
  console.log('Server started on port 3334!');
});
