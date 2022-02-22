import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config'


@Module({ 
    imports: [
        MongooseModule.forRoot(process.env.MONGOOSE_LINK),
        TrackModule] 
})
export class AppModule {}
