import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateSharkInput,
  Shark,
  SharkConnection,
  UpdateSharkInput,
} from '../graphql.schema';
import { SharksService } from './sharks.service';

@Resolver('Shark')
export class SharksResolvers {
  constructor(private readonly sharksService: SharksService) {}

  @Query('sharks')
  async findAll(
    @Args('first', ParseIntPipe) first: number,
    @Args('after') after?: string,
  ): Promise<SharkConnection> {
    return this.sharksService.findByCursor(first, after);
  }

  @Query('shark')
  async getById(@Args('id', ParseIntPipe) id: number): Promise<Shark> {
    return this.sharksService.getById(id);
  }

  @Mutation('createShark')
  async create(@Args('input') input: CreateSharkInput): Promise<Shark> {
    const shark = await this.sharksService.create(input);
    return shark;
  }

  @Mutation('updateShark')
  async update(@Args('input') input: UpdateSharkInput): Promise<Shark> {
    const shark = await this.sharksService.update(input);
    return shark;
  }
}
