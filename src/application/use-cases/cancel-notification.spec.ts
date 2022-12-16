import { NotificationNotFound } from './errors/notification-not-found';
import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificiationsRepository } from '@test/repositories/in-memory-notifications-repositories';
import { CancelNotification } from './cancel-notification';

describe('Cancel Notification', () => {
  it('should be to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificiationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova soliticação de amizade'),
      recipientId: 'example-recipient-id',
    });

    await notificationRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should note be able to cancel a none existing notification', async () => {
    const notificationRepository = new InMemoryNotificiationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() =>
      cancelNotification.execute({
        notificationId: 'FakeNotificationId',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
