import { Injectable } from '@nestjs/common';
import { CreateAutoCampaignNotUpdatedDto } from '../dto/create-auto-campaign-not-updated.dto';
import { UpdateAutoCampaignNotUpdatedDto } from '../dto/update-auto-campaign-not-updated.dto';
import { AutoCampaignNotUpdated } from '../entities/auto-campaign-not-updated.entity';
import { AutoCampaignNotUpdatedRepository } from '../repositories/auto-campaign-not-updated.repository';

@Injectable()
export class AutoCampaignNotUpdatedService {
  constructor(private readonly repo: AutoCampaignNotUpdatedRepository) {}

  async create(
    createAutoCampaignNotUpdatedDto: CreateAutoCampaignNotUpdatedDto,
  ): Promise<AutoCampaignNotUpdated> {
    return await this.repo.createCampaign(createAutoCampaignNotUpdatedDto);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  async update(
    id: number,
    updateAutoCampaignNotUpdatedDto: UpdateAutoCampaignNotUpdatedDto,
  ): Promise<AutoCampaignNotUpdated> {
    return this.repo.update(id, updateAutoCampaignNotUpdatedDto);
  }

  async remove(id: number): Promise<void> {
    return this.repo.remove(id);
  }
}
