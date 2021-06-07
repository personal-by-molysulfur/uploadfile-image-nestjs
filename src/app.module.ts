import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MulterModule.register({
    storage: diskStorage({
      destination: function (req, file, cb) {
        cb(null, './public/upload')
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + ".jpg")
      }
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
