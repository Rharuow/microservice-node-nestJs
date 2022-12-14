import { ControllerNotificationMapper } from './../mapper/controller-notification-mapper';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';

@Controller('notifications')
export class NotificaitonsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      category,
      content,
    });

    return {
      notification: ControllerNotificationMapper,
    };
  }
}
