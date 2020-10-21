export class CalcData {
  personalInfo: PersonalInfo = new PersonalInfo();
  FundSupport: FundSupport = new FundSupport();
  constructor(data?){
    if(data){
      this.personalInfo = new PersonalInfo(data.personalInfo);
      this.FundSupport = new FundSupport(data.FundSupport);
    }
  }
  public getData(isLoacal:boolean = false) {
    if(isLoacal){
      return {
        personalInfo: this.personalInfo.getData(isLoacal),
        FundSupport: this.FundSupport.getData(isLoacal),
      }
    }
    return {...this.personalInfo.getData(),...this.FundSupport.getData()}
  }
  public getValid(): boolean{
    return this.FundSupport.getValid() && this.personalInfo.getValid();
  }
}

export class PersonalInfo {
  birthdate_month: string = null;
  birthdate_year: string = null;
  work_category_code: string = null;
  income: number = null;
  bank_code: string = null;
  employer_code: string = null;
  last_appointment_date_month: any = null;
  last_appointment_date_year: any = null;
  constructor(data?) {
    if (data) {
      this.birthdate_month = data.birthdate_month
      this.birthdate_year = data.birthdate_year
      this.work_category_code = data.work_category_code
      this.income = data.income
      this.bank_code = data.bank_code
      this.employer_code = data.employer_code
      this.last_appointment_date_month = data.last_appointment_date_month
      this.last_appointment_date_year = data.last_appointment_date_year
    }

  }
  public getData(isLoacal:boolean = false) {
    let obj:any = {
      work_category_code: this.work_category_code,
      employer_code: this.employer_code,
      bank_code: this.bank_code,
      income: this.income
    }
    if(isLoacal){
      obj.birthdate_month = this.birthdate_month
      obj.birthdate_year = this.birthdate_year
      obj.last_appointment_date_month = this.last_appointment_date_month
      obj.last_appointment_date_year = this.last_appointment_date_year
    }
    else{
      obj.hijri_birth_date = this.birthdate_year + "-" + this.birthdate_month + "-01";
      obj.hijri_job_appointment = this.last_appointment_date_year + "-" + this.last_appointment_date_month + "-01";
    }
    return obj
  }
  public getValid(): boolean {
    return this.birthdate_month && this.birthdate_year && this.income && this.bank_code && this.last_appointment_date_month && this.last_appointment_date_year;
  }
}
export class FundSupport {
  have_fund_support: boolean = false;
  family_numbers: number = null;
  constructor(data?) {
    if (data) {
      this.have_fund_support = data.have_fund_support;
      this.family_numbers = data.family_numbers;
    }
  }
  public getData(isLoacal:boolean = false) {
    let obj:any = {}
    if(isLoacal){
      obj.have_fund_support =  this.have_fund_support;
      obj.family_numbers = this.family_numbers;
    }
    else{
      obj.have_fund_support =  this.have_fund_support ? 1 : 0
      obj.family_numbers = this.have_fund_support ? this.family_numbers : undefined
    }
    return obj
  }
  public getValid(): boolean {
    return this.have_fund_support ? this.family_numbers > 0 : true
  }
}
export class InitialCalculator{
  offers_count: number = 0;
  min_value: number = 0;
  max_value: number = 0;
  constructor(data?){
    if(data){
      this.offers_count = data.offers_number;
      this.min_value = data.min_value;
      this.max_value = data.max_value;
    }
  }
}