import { Client } from "src/app/shared/models/client.model";
import { Instance } from '../../projects/models/instance.model';
import { Project } from '../../projects/models/project.model';
import { DeveloperUser } from 'src/app/shared/models/user.model';

export class Resrvation {
  client: Client;
  clients_id: number;
  created_at: string;
  id: number;
  instance:Instance;
  instances_id: number;
  instances_unit: number;
  instances_unit_id: number;
  project: Project;
  projects_id: number;
  real_estate_developer: DeveloperUser;
  real_estate_developer_id: number;
  updated_at: string;
  refuse_reason: string;
  reservation_duration: number
  reservation_expire_date: string;
  reservation_status: string
 

}