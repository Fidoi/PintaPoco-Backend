import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { DrawingsService } from './drawings.service';

@Controller('drawings')
export class DrawingsController {
  constructor(private readonly drawingsService: DrawingsService) {}

  @Post()
  async createDrawing(
    @Body() body: { name: string; imageData: string },
    @Headers('x-api-key') apiKey: string,
  ) {
    if (apiKey !== process.env.ADMIN_API_KEY) {
      throw new UnauthorizedException('No tienes permisos para crear dibujos');
    }
    return this.drawingsService.createDrawing({
      name: body.name,
      imageData: body.imageData,
    });
  }

  @Get()
  async getAllDrawings(@Headers('x-api-key') apiKey: string) {
    if (apiKey !== process.env.ADMIN_API_KEY) {
      throw new UnauthorizedException(
        'No tienes permisos para acceder a los dibujos',
      );
    }
    return this.drawingsService.getAllDrawings();
  }
  // TODO : agregar authentication ADMIN para borrar de ser posible
  @Delete(':id')
  async deleteImage(
    @Param('id') id: string,
    @Headers('x-api-key') apiKey: string,
  ) {
    if (apiKey !== process.env.ADMIN_API_KEY) {
      throw new UnauthorizedException(
        'No tienes permisos para eliminar imágenes',
      );
    }
    return this.drawingsService.deleteImage(id);
  }
}
