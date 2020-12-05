import { Module } from '@nestjs/common';
import { SharksResolvers } from './sharks.resolvers';
import { SharksService } from './sharks.service';

@Module({
  providers: [SharksService, SharksResolvers],
})
export class SharksModule {}
