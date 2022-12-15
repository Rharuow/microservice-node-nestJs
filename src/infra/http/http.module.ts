import { NotificaitonsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificaitonsController],
  providers: [SendNotification],
})
export class HttpModule {}
