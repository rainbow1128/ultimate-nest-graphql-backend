import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import 'dotenv/config'

const start = async () => {
    try {
        const PORT = process.env.SERVER_PORT || 5000;
        const app = await NestFactory.create(AppModule);
        app.enableCors();
        await app.listen(PORT, () => {
            console.log(`server started on PORT: ${PORT}`);
        })
    } catch (error) {
        console.log(error);

    }
}

start();