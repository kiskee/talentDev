import { Module } from '@nestjs/common';
import { AutoCampaignNotUpdatedService } from './services/auto-campaign-not-updated.service';
import { AutoCampaignNotUpdatedController } from './controllers/auto-campaign-not-updated.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoCampaignNotUpdated } from './entities/auto-campaign-not-updated.entity';

@Module({
  controllers: [AutoCampaignNotUpdatedController],
  providers: [AutoCampaignNotUpdatedService],
  imports: [
    TypeOrmModule.forFeature([AutoCampaignNotUpdated])
  ]
})
export class AutoCampaignNotUpdatedModule { }
