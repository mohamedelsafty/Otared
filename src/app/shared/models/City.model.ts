import { Neighborhood } from './neighborhood.model';

export class City {
    id: number;
    name_arabic: string;
    name_english: string;
    created_at: string;
    updated_at: string;
    neighborhood_list: Neighborhood[];
}