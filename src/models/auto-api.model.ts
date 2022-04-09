import {Entity, model, property} from '@loopback/repository';

@model()
export class AutoApi extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  content?: string;


  constructor(data?: Partial<AutoApi>) {
    super(data);
  }
}

export interface AutoApiRelations {
  // describe navigational properties here
}

export type AutoApiWithRelations = AutoApi & AutoApiRelations;
