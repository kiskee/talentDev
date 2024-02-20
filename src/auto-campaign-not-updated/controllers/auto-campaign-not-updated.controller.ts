import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutoCampaignNotUpdatedService } from '../services/auto-campaign-not-updated.service';
import { CreateAutoCampaignNotUpdatedDto } from '../dto/create-auto-campaign-not-updated.dto';
import { UpdateAutoCampaignNotUpdatedDto } from '../dto/update-auto-campaign-not-updated.dto';

@Controller('auto-campaign-not-updated')
export class AutoCampaignNotUpdatedController {
  constructor(private readonly autoCampaignNotUpdatedService: AutoCampaignNotUpdatedService) {}

  @Post()
  create(@Body() createAutoCampaignNotUpdatedDto: CreateAutoCampaignNotUpdatedDto) {
    return this.autoCampaignNotUpdatedService.create(createAutoCampaignNotUpdatedDto);
  }

  @Get()
  findAll() {
    return this.autoCampaignNotUpdatedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoCampaignNotUpdatedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutoCampaignNotUpdatedDto: UpdateAutoCampaignNotUpdatedDto) {
    return this.autoCampaignNotUpdatedService.update(+id, updateAutoCampaignNotUpdatedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoCampaignNotUpdatedService.remove(+id);
  }
}
