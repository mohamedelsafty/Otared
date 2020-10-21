export class PurchasingData {
  propertyInfo: PropertyInfo = new PropertyInfo();
  paymentStatus: PaymentStatus = new PaymentStatus();
  financeInformation: FinanceInformation = new FinanceInformation();
  obligations: Obligation = new Obligation();
  financialStatus: FinancialStatus = new FinancialStatus();
  additionalIncomeStatus: AdditionalIncomeStatus = new AdditionalIncomeStatus();
  jointStatus: JointStatus = new JointStatus();
  constructor(data?) {
    if (data) {
      this.propertyInfo = new PropertyInfo(data);
      this.paymentStatus = new PaymentStatus(data);
      this.financeInformation = new FinanceInformation(data);
      this.obligations = new Obligation(data);
      this.financialStatus = new FinancialStatus(data);
      this.additionalIncomeStatus = new AdditionalIncomeStatus(data);
      this.jointStatus = new JointStatus(data);
    }
  }
  public getData(isLoacal: boolean = false) {
    if (isLoacal) {
      return {
        propertyInfo: this.propertyInfo.getData(isLoacal),
        paymentStatus: this.paymentStatus.getData(isLoacal),
        financeInformation: this.financeInformation.getData(isLoacal),
        obligations: this.obligations.getData(isLoacal),
        financialStatus: this.financialStatus.getData(isLoacal),
        additionalIncomeStatus: this.additionalIncomeStatus.getData(isLoacal),
        jointStatus: this.jointStatus.getData(isLoacal)
      };
    }
    return {
      ...this.propertyInfo.getData(),
      ...this.paymentStatus.getData(),
      ...this.financeInformation.getData(),
      ...this.obligations.getData(),
      ...this.financialStatus.getData(),
      ...this.additionalIncomeStatus.getData(),
      ...this.jointStatus.getData()
    };
  }
  public getValid(): boolean {
    return (
      this.propertyInfo.getValid() &&
      this.paymentStatus.getValid() &&
      this.financeInformation.getValid() &&
      this.obligations.getValid() &&
      this.financialStatus.getValid() &&
      this.additionalIncomeStatus.getValid() &&
      this.jointStatus.getValid()
    );
  }
}
export class PropertyInfo {
  isHaveProperty: boolean = null;
  instance_unit_id: number = null;
  isFromOtard: boolean = null;
  property_type_code: string = null;
  project_id: number = null;
  instance_id: number = null;
  age: number = null;
  status: string = null; //incomplete. complete
  amount: number = null;
  constructor(data?) {
    if (data) {
      this.instance_unit_id = data.instance_unit_id;
      this.property_type_code = data.property_type_code;
      this.age = data.age;
      this.status = data.status;
      this.amount = data.amount;
      this.isHaveProperty = true;
      if (this.instance_unit_id) this.isFromOtard = true;
      else this.isFromOtard = false;
    }
  }
  public getData(isLoacal: boolean = false) {
    let obj: any = {};
    if (this.instance_unit_id) {
      obj.instance_unit_id = this.instance_unit_id;
    } else {
      obj.property_type_code = this.property_type_code;
      obj.age = this.age;
      obj.status = this.status;
      obj.amount = this.amount;
    }
    if (isLoacal && this.instance_unit_id) {
      obj.isFromOtard = true;
    }
    if (isLoacal && !this.instance_unit_id) {
      obj.isFromOtard = false;
    }
    return obj;
  }
  public getValid(): boolean {
    if (this.instance_unit_id > 0) {
      return true;
    } else {
      return (
        this.age > 0 &&
        this.amount > 0 &&
        this.status !== null &&
        this.property_type_code !== null
      );
    }
  }
}
export class PaymentStatus {
  have_first_payment: boolean = null;
  first_payment_amount: number = null;
  constructor(data?) {
    if (data) {
      this.first_payment_amount = data.first_payment_amount;
      this.have_first_payment = data.have_first_payment;
    }
  }
  public getData(isLoacal: boolean = false) {
    let obj: any = {};

    if (this.first_payment_amount)
      obj.first_payment_amount = this.first_payment_amount;
    if (isLoacal) obj.have_first_payment = this.have_first_payment;
    else
      this.have_first_payment
        ? (obj.have_first_payment = 1)
        : (obj.have_first_payment = 0);
    return obj;
  }
  public getValid(): boolean {
    if (
      this.have_first_payment !== null &&
      this.have_first_payment !== undefined &&
      !this.have_first_payment
    ) {
      return true;
    } else if (this.have_first_payment && this.first_payment_amount > 0) {
      return true;
    }
    return false;
  }
}
export class FinanceInformation {
  housing_allowance: number = null;
  transportation_allowance: number = null;
  other_allowances: number = null;
  constructor(data?) {
    if (data) {
      this.housing_allowance = data.housing_allowance;
      this.transportation_allowance = data.transportation_allowance;
      this.other_allowances = data.other_allowances;
    }
  }
  public getData(isLoacal: boolean = false) {
    let obj: any = {
      housing_allowance: this.housing_allowance,
      transportation_allowance: this.transportation_allowance,
      other_allowances: this.other_allowances
    };

    return obj;
  }
  public getValid(): boolean {
    return true;
  }
}
export class Obligation {
  have_monthly_obligations: boolean = null;
  monthly_obligations: MonthlyObligation[] = [];
  constructor(data?) {
    if (data) {
      this.have_monthly_obligations = data.have_monthly_obligations;
      if (data.monthly_obligations)
        data.monthly_obligations.map((monthlyObligation: MonthlyObligation) => {
          this.monthly_obligations.push(
            new MonthlyObligation(monthlyObligation)
          );
        });
    }
  }
  public getData(isLoacal: boolean = false) {
    let obj: any = {
      have_monthly_obligations: this.have_monthly_obligations,
      monthly_obligations: this.monthly_obligations
    };
    if (this.have_monthly_obligations && !isLoacal)
      obj.have_monthly_obligations = 1;
    else obj.have_monthly_obligations = 0;
    return obj;
  }
  public getValid(): boolean {
    return (
      this.have_monthly_obligations !== null &&
      this.have_monthly_obligations !== undefined
    );
  }
}
export class MonthlyObligation {
  bank_id: number = null;
  type: number = null;
  remaining_installments: number = null;
  amount: number = null;
  early_repayment: number = null;
  constructor(data?) {
    if (data) {
      this.bank_id = data.bank_id;
      this.type = data.type;
      this.remaining_installments = data.remaining_installments;
      this.amount = data.amount;
      this.early_repayment = data.early_repayment;
    }
  }
}
export class FinancialStatus {
  have_financial_troubles: boolean = null;
  financial_troubles: FinancialTrouble[] = [];
  constructor(data?) {
    if (data) {
      this.have_financial_troubles = data.have_financial_troubles;
      if (data.financial_troubles)
        data.financial_troubles.map((financialTroubles: FinancialTrouble) => {
          this.financial_troubles.push(new FinancialTrouble(financialTroubles));
        });
    }
  }
  public getData(isLoacal: boolean = false) {
    let obj: any = {
      have_financial_troubles: this.have_financial_troubles,
      financial_troubles: this.financial_troubles
    };
    if (this.have_financial_troubles && !isLoacal)
      obj.have_financial_troubles = 1;
    else obj.have_financial_troubles = 0;
    return obj;
  }
  public getValid(): boolean {
    return (
      this.have_financial_troubles !== null &&
      this.have_financial_troubles !== undefined
    );
  }
}
export class FinancialTrouble {
  bank_id: number = null;
  type: number = null;
  amount: number = null;
  details: number = null;
  constructor(data?) {
    if (data) {
      this.bank_id = data.bank_id;
      this.type = data.type;
      this.amount = data.amount;
      this.details = data.details;
    }
  }
}
export class AdditionalIncomeStatus {
  have_additional_incomes: boolean = null;
  additional_incomes: AdditionalIncome[] = [];
  constructor(data?) {
    if (data) {
      this.have_additional_incomes = data.have_additional_incomes;
      if (data.additional_incomes)
        data.additional_incomes.map((additionalIncome: FinancialTrouble) => {
          this.additional_incomes.push(new AdditionalIncome(additionalIncome));
        });
    }
  }
  public getData(isLoacal: boolean = false) {
    let obj: any = {
      have_additional_incomes: this.have_additional_incomes,
      additional_incomes: this.additional_incomes
    };
    if (this.have_additional_incomes && !isLoacal)
      obj.have_additional_incomes = 1;
    else obj.have_additional_incomes = 0;
    return obj;
  }
  public getValid(): boolean {
    return (
      this.have_additional_incomes !== null &&
      this.have_additional_incomes !== undefined
    );
  }
}
export class AdditionalIncome {
  bank_id: number = null;
  work_category_id: number = null;
  income: number = null;
  constructor(data?) {
    if (data) {
      this.bank_id = data.bank_id;
      this.work_category_id = data.work_category_id;
      this.income = data.income;
    }
  }
}
export class JointStatus {
  have_joint: boolean = null;
  joint: Joint = new Joint();
  constructor(data?) {
    if (data) {
      this.have_joint = data.have_joint;
      this.joint = new Joint(data.joint);
    }
  }
  public getData(isLoacal: boolean = false) {
    let obj: any = {
      have_joint: this.have_joint,
      joint: this.joint.getData()
    };
    if (this.have_joint && !isLoacal) obj.have_joint = 1;
    else obj.have_joint = 0;
    return obj;
  }
  public getValid(): boolean {
    return this.have_joint !== null && this.have_joint !== undefined;
  }
}
export class Joint {
  bank_id: number = null;
  employer_id: number = null;
  relationship: string = null;
  month: string = null;
  year: string = null;
  income: number = null;
  have_fund_support: boolean = null;
  family_numbers: number = null;
  work_category_id: number = null;
  constructor(data?) {
    if (data) {
      this.bank_id = data.bank_id;
      this.employer_id = data.employer_id;
      this.relationship = data.relationship;
      this.income = data.income;
      this.have_fund_support = data.have_fund_support;
      this.family_numbers = data.family_numbers;
      this.work_category_id = data.work_category_id;
    }
  }
  public getData() {
    let obj = {
      bank_id: this.bank_id,
      employer_id: this.employer_id,
      relationship: this.relationship,
      income: this.income,
      thave_fund_support: this.have_fund_support ? 1 : 0,
      family_numbers: this.family_numbers,
      work_category_id: this.work_category_id,
      hijri_birth_date: this.year + "-" + this.month + "-01"
    };
    return obj;
  }
}
