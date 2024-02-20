import { DataSource, Repository } from "typeorm";
import { AutoCampaignNotUpdated } from "../entities/auto-campaign-not-updated.entity";
import { Injectable } from "@nestjs/common";
import { CreateAutoCampaignNotUpdatedDto } from "../dto/create-auto-campaign-not-updated.dto";


export class AutoCampaignNotUpdatedRepository extends Repository<AutoCampaignNotUpdated> {

    async createCampaign(
        createAutoCampaignNotUpdatedDto: CreateAutoCampaignNotUpdatedDto,
      ): Promise<AutoCampaignNotUpdated> {
        const {
          api_client_name,
          api_campaign_id,
          campaign_name,
          created,
          created_by,
        } = createAutoCampaignNotUpdatedDto;
    
        const auNotUp = this.create({
          api_client_name,
          api_campaign_id,
          campaign_name,
          created,
          created_by,
        });
    
        await this.save(auNotUp);
        return auNotUp;
      }

}