import {emailRegexp} from "../../constants";

class EmployeeBasicsForm {
  constructor() {
    this.name = '';
    this.email = '';
  }

  validate() {
    let errors = [];
    if (!this.name) {
      errors.push('Please provide as just first name, so we can mail you kindly.')
    }
    if (!this.email) {
      errors.push('We will need your valid e-mail to let you know the perfect offer.')
      return errors;
    }
    if (!emailRegexp.test(String(this.email).toLowerCase())) {
      errors.push('An email needs to have appropriate format.')
    }
    return errors
  }
}

class EmployeeForm {
  constructor() {
    this.employeeBasicsForm = new EmployeeBasicsForm()
  }

  updateBasicForm(basicForm) {
    this.employeeBasicsForm = basicForm
  }
}

export {
  EmployeeBasicsForm,
  EmployeeForm
}
