export class Project {
  id: number =  null;
  name: string = null;
  description: string = null;
  number_of_units: number = null;
  project_type: string = null;
  sale_on_map_license_number: number = null;
  sale_on_map_license_expire_date: any = null;
  starts_date: any = null;
  ends_date: any = null;
  is_exclusive: boolean = false;
  logo_path: any = null;
  longitude: any = null;
  latitude: any = null;
  project_state?: string = null;
  real_estate_developer_id?: number = null;
  city_id: number = null;
  neighborhoods_id: number = null;
  scheme_image_path: any = null;
  project_images_paths: [] = [];
  constructor(data?) {
    if(data){
    if(data.id) this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.number_of_units = data.number_of_units;
    this.project_type = data.project_type;
    this.sale_on_map_license_number = data.sale_on_map_license_number;
    this.sale_on_map_license_expire_date = data.sale_on_map_license_expire_date;
    this.starts_date = data.starts_date;
    this.ends_date = data.ends_date;
    this.is_exclusive = data.is_exclusive;
    this.logo_path = data.logo_path;
    this.longitude = data.longitude;
    this.latitude = data.latitude;
    this.project_state = data.project_state;
    this.real_estate_developer_id = data.real_estate_developer_id;
    this.city_id = data.city_id;
    this.neighborhoods_id = data.neighborhoods_id;
    this.scheme_image_path = data.scheme_image_path;
    this.project_images_paths = data.project_images_paths;
    } 
    
  }

}
