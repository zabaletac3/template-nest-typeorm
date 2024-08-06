import constants from 'src/constants';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: constants.DB_HOST,
  port: parseInt(constants.DB_PORT, 10),
  username: constants.DB_USERNAME,
  password: constants.DB_PASSWORD,
  database: constants.DB_NAME,
  entities: [__dirname + '/src/shared/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
