import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repositories';

interface ListNotificationResponse {
  notifications: Array<Notification>;
}

@Injectable()
export class ListNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(): Promise<ListNotificationResponse> {
    const notifications = await this.notificationsRepository.list();

    return {
      notifications,
    };
  }
}
