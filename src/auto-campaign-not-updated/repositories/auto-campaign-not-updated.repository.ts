import { Repository } from 'typeorm';
import { AutoCampaignNotUpdated } from '../entities/auto-campaign-not-updated.entity';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAutoCampaignNotUpdatedDto } from '../dto/create-auto-campaign-not-updated.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAutoCampaignNotUpdatedDto } from '../dto/update-auto-campaign-not-updated.dto';
import { ValidationError } from 'class-validator';

@Injectable()
export class AutoCampaignNotUpdatedRepository {
  constructor(
    @InjectRepository(AutoCampaignNotUpdated)
    private readonly autoCampaignNotUpdatedRepository: Repository<AutoCampaignNotUpdated>,
  ) {}

  async createCampaign(
    createAutoCampaignNotUpdatedDto: CreateAutoCampaignNotUpdatedDto,
  ): Promise<AutoCampaignNotUpdated> {
    const { api_client_name, api_campaign_id, campaign_name, created_by } =
      createAutoCampaignNotUpdatedDto;

    const auNotUp = this.autoCampaignNotUpdatedRepository.create({
      api_client_name,
      api_campaign_id,
      campaign_name,
      created: new Date().toISOString(),
      created_by, //must be the user logged in this case we are sending it through the json
    });

    try {
      await this.autoCampaignNotUpdatedRepository.save(auNotUp);
      return auNotUp;
    } catch (error) {
      // Check if the error is an instance of ValidationError
      if (
        error instanceof Array &&
        error.every((err) => err instanceof ValidationError)
      ) {
        // Here you can handle validation errors
        console.error('Validation errors:', error);
        throw new BadRequestException(
          'Validation errors',
          JSON.stringify(error),
        );
      } else {
        // Other types of errors
        console.error('An unexpected error occurred:', error);
        throw new InternalServerErrorException(
          'An unexpected error occurred',
          JSON.stringify(error),
        );
      }
    }
  }

  findAll() {
    return this.autoCampaignNotUpdatedRepository.find({});
  }

  async findOne(id: number) {
    try {
      // Try to get the record
      const record = await this.autoCampaignNotUpdatedRepository.findOneBy({
        id,
      });

      // If not found, throw an error
      if (!record) {
        throw new NotFoundException('No record found');
      }

      // Otherwise, return the record
      return record;
    } catch (error) {
      // Catch any error that occurs during the process
      if (error instanceof NotFoundException) {
        // If it's a NotFoundException, rethrow it
        throw error;
      } else {
        // For other types of errors, handle them and throw a generic error
        console.error('An unexpected error occurred:', error);
        throw new InternalServerErrorException('An unexpected error occurred');
      }
    }
  }

  async update(
    id: number,
    updateAutoCampaignNotUpdatedDto: UpdateAutoCampaignNotUpdatedDto,
  ): Promise<AutoCampaignNotUpdated> {
    try {
      const { api_client_name, api_campaign_id, campaign_name, created_by } =
        updateAutoCampaignNotUpdatedDto;

      // Retrieve the record to update
      const autoCampaignNotUpdated = await this.findOne(id);

      // Update the record with the new values
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

      // Save the updated record
      return await this.autoCampaignNotUpdatedRepository.save(
        autoCampaignNotUpdated,
      );
    } catch (error) {
      // Catch any error that occurs during the process
      console.error('An unexpected error occurred:', error);
      throw new InternalServerErrorException('An unexpected error occurred');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      // Attempt to delete the record
      const result = await this.autoCampaignNotUpdatedRepository.delete(id);

      // If the record is not found, throw a NotFoundException
      if (result.affected === 0) {
        throw new NotFoundException(`Record with ID "${id}" not found`);
      }
    } catch (error) {
      // Catch any error that occurs during the process
      if (error instanceof NotFoundException) {
        // If it's a NotFoundException, rethrow it
        throw error;
      } else {
        // For other types of errors, handle them and throw a generic error
        console.error('An unexpected error occurred:', error);
        throw new InternalServerErrorException('An unexpected error occurred');
      }
    }
  }
}
