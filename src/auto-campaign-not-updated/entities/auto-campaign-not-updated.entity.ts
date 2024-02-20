import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("auto_campaign_not_updated", { schema: "talent_rearch_employers" })
export class AutoCampaignNotUpdated {
    @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
        comment: "Unique table ID",
        unsigned: true,
      })
      id: number;
    
      @Column("varchar", {
        name: "api_client_name",
        comment: "Name of the client to consume their api (ex. appcast)",
        length: 50,
      })
      api_client_name: string;
    
      @Column("varchar", {
        name: "api_campaign_id",
        comment: "Unique ID from bucket auto_campaign_api (Ex. appcast_",
        length: 100,
      })
      api_campaign_id: string;
    
      @Column("varchar", {
        name: "campaign_name",
        comment: "Campaign Name, is unique for each accountID",
        length: 250,
      })
      campaign_name: string;
    
      @Column("datetime", { name: "created", comment: "Date inserted" })
      created: Date;
    
      @Column("varchar", {
        name: "created_by",
        comment: "Email of the user who created the tag",
        length: 200,
      })
      created_by: string;
}
