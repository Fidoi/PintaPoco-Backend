import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class DrawingsService {
  constructor(private readonly prisma: PrismaService) {}

  async createDrawing(data: { name: string; imageData: string }) {
    const uploadResponse = await cloudinary.uploader.upload(data.imageData, {
      folder: 'paint-app',
      use_filename: true,
      unique_filename: false,
    });
    const imageUrl = uploadResponse.secure_url;

    return this.prisma.drawing.create({
      data: {
        name: data.name,
        imageUrl: imageUrl,
      },
    });
  }

  async getAllDrawings() {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const drawings = await this.prisma.drawing.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return drawings.map((drawing) => ({
      ...drawing,
      isNew: drawing.createdAt > oneWeekAgo,
    }));
  }

  async deleteImage(id: string) {
    return this.prisma.drawing.delete({ where: { id } });
  }
}
