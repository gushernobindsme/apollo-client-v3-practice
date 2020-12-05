import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SharksModule } from './sharks/sharks.module';

@Module({
  imports: [
    SharksModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class AppModule {}
