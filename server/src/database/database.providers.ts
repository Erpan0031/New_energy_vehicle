import * as mongoose from 'mongoose';
mongoose.set('strictQuery', false);
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://127.0.0.1:27017/nicecar'),
  },
];
