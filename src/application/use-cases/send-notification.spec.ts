import { InMemoryNotificiationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be to send a notification', async () => {
    const notificationRepository = new InMemoryNotificiationsRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'example-recipient-id',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
