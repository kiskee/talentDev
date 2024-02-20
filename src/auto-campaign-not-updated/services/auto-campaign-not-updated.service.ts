import { Injectable } from '@nestjs/common';
import { CreateAutoCampaignNotUpdatedDto } from '../dto/create-auto-campaign-not-updated.dto';
import { UpdateAutoCampaignNotUpdatedDto } from '../dto/update-auto-campaign-not-updated.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutoCampaignNotUpdated } from '../entities/auto-campaign-not-updated.entity';

@Injectable()
export class AutoCampaignNotUpdatedService {
  constructor(
    @InjectRepository(AutoCampaignNotUpdated)
    private readonly autoCampaignNotUpdatedRepository: Repository<AutoCampaignNotUpdated>,
  ) {}

  async create(
    createAutoCampaignNotUpdatedDto: CreateAutoCampaignNotUpdatedDto,
  ): Promise<AutoCampaignNotUpdated> {
    const {
      api_client_name,
      api_campaign_id,
      campaign_name,
      created,
      created_by,
    } = createAutoCampaignNotUpdatedDto;

    const auNotUp = this.autoCampaignNotUpdatedRepository.create({
      api_client_name,
      api_campaign_id,
      campaign_name,
      created,
      created_by,
    });

    await this.autoCampaignNotUpdatedRepository.save(auNotUp);
    return auNotUp;
  }

  findAll() {
    return this.autoCampaignNotUpdatedRepository.find({});
  }

  findOne(id: number) {
    return this.autoCampaignNotUpdatedRepository.findOneBy({ id: id });
  }

  async update(
    id: number,
    updateAutoCampaignNotUpdatedDto: UpdateAutoCampaignNotUpdatedDto
  ): Promise<AutoCampaignNotUpdated> {
    const {
      api_client_name,
      api_campaign_id,
      campaign_name,
      created_by,
    } = updateAutoCampaignNotUpdatedDto;

    // Encuentra la campaña a actualizar
    const autoCampaignNotUpdated = await this.findOne(id)
   

    // Actualiza los campos necesarios
    if (api_client_name !== undefined) {
      autoCampaignNotUpdated.api_client_name = api_client_name;
    }
    if (api_campaign_id !== undefined) {
      autoCampaignNotUpdated.api_campaign_id = api_campaign_id;
    }
    if (campaign_name !== undefined) {
      autoCampaignNotUpdated.campaign_name = campaign_name;
    }
    if (created_by !== undefined) {
      autoCampaignNotUpdated.created_by = created_by;
    }

  
    return this.autoCampaignNotUpdatedRepository.save(autoCampaignNotUpdated)
}


  remove(id: number) {
    return `This action removes a #${id} autoCampaignNotUpdated`;
  }
}
