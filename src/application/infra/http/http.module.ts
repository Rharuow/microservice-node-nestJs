import { NotificaitonController } from './controller/notification.controller';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificaitonController],
  providers: [SendNotification],
})
export class HttpModule {}
