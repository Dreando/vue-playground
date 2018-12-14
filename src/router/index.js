import Vue from 'vue'
import Router from 'vue-router'

// Employee
import Employee from '../components/employee/employee'
import EmployeeBasicsFormComponent from '../components/employee/employee-basics-form'
import EmployeeSkillsetFormComponent from '../components/employee/employee-skillset-form'

// Routes
import {employeeWizard} from '../routes'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/employee',
      component: Employee,
      children: [
        {
          path: '',
          name: employeeWizard.EmployeeBasicsComponent,
          component: EmployeeBasicsFormComponent
        },
        {
          path: '/employee/skillset',
          name: employeeWizard.EmployeeSkillsetComponent,
          component: EmployeeSkillsetFormComponent
        }
      ]
    }
  ]
})
