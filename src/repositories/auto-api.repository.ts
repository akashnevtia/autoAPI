import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {AutoApi, AutoApiRelations} from '../models';

export class AutoApiRepository extends DefaultCrudRepository<
  AutoApi,
  typeof AutoApi.prototype.id,
  AutoApiRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(AutoApi, dataSource);
  }
}
