import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificiationsRepository } from '@test/repositories/in-memory-notifications-repositories';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count by recipient Notifications', () => {
  it('should be to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificiationsRepository();
    const countrecipientNotifications = new CountRecipientNotification(
      notificationsRepository,
    );

    const totalrecipientNotifications = 2;

    for (let index = 0; index < totalrecipientNotifications; index++) {
      await notificationsRepository.create(
        new Notification({
          category: 'social',
          content: new Content('Nova solicitação de amizade'),
          recipientId: 'example-recipient-id',
        }),
      );
    }

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade'),
        recipientId: 'example-recipient-id-1',
      }),
    );

    const { count } = await countrecipientNotifications.execute({
      recipientId: 'example-recipient-id',
    });

    expect(count).toEqual(2);
  });
});
