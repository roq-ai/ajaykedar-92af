import { TimeTrackingInterface } from 'interfaces/time-tracking';
import { TeamInterface } from 'interfaces/team';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  name: string;
  team_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  time_tracking?: TimeTrackingInterface[];
  team?: TeamInterface;
  user?: UserInterface;
  _count?: {
    time_tracking?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  team_id?: string;
  user_id?: string;
}
