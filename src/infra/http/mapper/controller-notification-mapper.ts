import { Notification } from '@application/entities/notification';

export class ControllerNotificationMapper {
  static toHttp(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      category: notification.category,
      content: notification.content,
    };
  }
}
