export class UserRegister {
  personal_name: string;
  commercial_name: string;
  commercial_registration_no: number;
  commercial_registration_idnumber: number;
  phone_number: number;
  city_id: number;
  password_hash: any;
  r_password_hash: any;
}

export class UserLogin {
  phone_number: string;
  password_hash: any;
  device_name: string;
}

export class UserReset {
  phone_number: string;
  password_hash: any;
  r_password_hash: any;
  token: any;
}

export class DeveloperUser {
  account_status: string = null;
  city_id: number = null;
  commercial_name: string = null;
  commercial_registration_idnumber: number = null;
  commercial_registration_no: string = null;
  description: string = null;
  email_address: string = null;
  head_office_address:string = null;
  id: number = null;
  logo_path: any = null;
  personal_name: string = null;
  refuse_reason: string = null;
  website: string = null;
}
