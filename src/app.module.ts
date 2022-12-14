import { Module } from '@nestjs/common';
import { HttpModule } from './application/infra/http/http.module';
import { DatabaseModule } from './application/infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
