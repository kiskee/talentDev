import { Module } from '@nestjs/common';
import { AutoCampaignNotUpdatedService } from './services/auto-campaign-not-updated.service';
import { AutoCampaignNotUpdatedController } from './controllers/auto-campaign-not-updated.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoCampaignNotUpdated } from './entities/auto-campaign-not-updated.entity';
import { AutoCampaignNotUpdatedRepository } from './repositories/auto-campaign-not-updated.repository';

@Module({
  controllers: [AutoCampaignNotUpdatedController],
  providers: [AutoCampaignNotUpdatedService,AutoCampaignNotUpdatedRepository],
  imports: [
    TypeOrmModule.forFeature([AutoCampaignNotUpdated])
  ]
})
export class AutoCampaignNotUpdatedModule { }
