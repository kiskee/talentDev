import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoCampaignNotUpdatedDto } from './create-auto-campaign-not-updated.dto';

export class UpdateAutoCampaignNotUpdatedDto extends PartialType(CreateAutoCampaignNotUpdatedDto) {}
