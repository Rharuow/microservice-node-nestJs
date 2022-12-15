import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repositories';

export class InMemoryNotificiationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
