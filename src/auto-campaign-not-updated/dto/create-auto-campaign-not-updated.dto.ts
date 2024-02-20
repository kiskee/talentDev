import { IsNotEmpty, IsString } from "class-validator";

export class CreateAutoCampaignNotUpdatedDto {
    @IsNotEmpty()
    @IsString()
    api_client_name: string;

    @IsNotEmpty()
    @IsString()
    api_campaign_id: string;

    @IsNotEmpty()
    @IsString()
    campaign_name: string;

    @IsNotEmpty()
    @IsString()
    created_by: string;
}
