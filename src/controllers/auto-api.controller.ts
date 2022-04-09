import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {AutoApi} from '../models';
import {AutoApiRepository} from '../repositories';

export class AutoApiController {
  constructor(
    @repository(AutoApiRepository)
    public autoApiRepository : AutoApiRepository,
  ) {}

  @post('/auto-apis')
  @response(200, {
    description: 'AutoApi model instance',
    content: {'application/json': {schema: getModelSchemaRef(AutoApi)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AutoApi, {
            title: 'NewAutoApi',
            exclude: ['id'],
          }),
        },
      },
    })
    autoApi: Omit<AutoApi, 'id'>,
  ): Promise<AutoApi> {
    return this.autoApiRepository.create(autoApi);
  }

  @get('/auto-apis/count')
  @response(200, {
    description: 'AutoApi model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AutoApi) where?: Where<AutoApi>,
  ): Promise<Count> {
    return this.autoApiRepository.count(where);
  }

  @get('/auto-apis')
  @response(200, {
    description: 'Array of AutoApi model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AutoApi, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AutoApi) filter?: Filter<AutoApi>,
  ): Promise<AutoApi[]> {
    return this.autoApiRepository.find(filter);
  }

  @patch('/auto-apis')
  @response(200, {
    description: 'AutoApi PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AutoApi, {partial: true}),
        },
      },
    })
    autoApi: AutoApi,
    @param.where(AutoApi) where?: Where<AutoApi>,
  ): Promise<Count> {
    return this.autoApiRepository.updateAll(autoApi, where);
  }

  @get('/auto-apis/{id}')
  @response(200, {
    description: 'AutoApi model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AutoApi, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AutoApi, {exclude: 'where'}) filter?: FilterExcludingWhere<AutoApi>
  ): Promise<AutoApi> {
    return this.autoApiRepository.findById(id, filter);
  }

  @patch('/auto-apis/{id}')
  @response(204, {
    description: 'AutoApi PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AutoApi, {partial: true}),
        },
      },
    })
    autoApi: AutoApi,
  ): Promise<void> {
    await this.autoApiRepository.updateById(id, autoApi);
  }

  @put('/auto-apis/{id}')
  @response(204, {
    description: 'AutoApi PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() autoApi: AutoApi,
  ): Promise<void> {
    await this.autoApiRepository.replaceById(id, autoApi);
  }

  @del('/auto-apis/{id}')
  @response(204, {
    description: 'AutoApi DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.autoApiRepository.deleteById(id);
  }
}
