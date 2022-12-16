import { PrismaNotificationMapper } from './../mapper/prisma-nitification-mapper';
import { NotificationsRepository } from '@application/repositories/notifications-repositories';
import { PrismaService } from '../prisma.service';
import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}
  list(): Promise<Notification[]> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification): Promise<void> {
    const prismaMapper = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: prismaMapper,
    });
  }
}
