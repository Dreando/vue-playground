<template>
  <div>
    <el-container>
      <el-header>
        <el-steps :active="active" finish-status="success">
          <el-step title="Step 1" description="Tell us the very basics"></el-step>
          <el-step title="Step 2"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </el-header>
      <el-container style="margin-top: 4em">
        <el-aside>
          <div v-show="employeeForm.employeeBasicsForm.validate().length === 0" class="summary">
            <div><strong>Basic information:</strong></div>
            <div>Name: {{employeeForm.employeeBasicsForm.name}}</div>
            <div>E-mail: {{employeeForm.employeeBasicsForm.email}}</div>
          </div>
        </el-aside>
        <el-main class="wizard">
          <router-view
            @employeeBasicsFormSubmit="onEmployeeBasicsFormSubmit">
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

  import {EmployeeForm} from './employee-domain'

  // Routing names
  import {employeeWizard} from "../../routes";

  export default {

    data() {
      return ({
        active: 0,
        employeeForm: new EmployeeForm()
      })
    },
    methods: {

      onHeartBeat(evt) {
        if(evt !== (active + 1)) {
          this.$router.push({
            name: employeeWizard.EmployeeBasicsComponent
          })
        }
      },

      onEmployeeBasicsFormSubmit(evt) {
        this.employeeForm.updateBasicForm(evt);
        this.active = 1;
        this.$router.push({
          name: employeeWizard.EmployeeSkillsetComponent
        })
      }
    }
  }

</script>

<style>
  .summary {
    width: 300px;
    padding: 1em;
    font-size: 10pt;
    background-color: #eeeeee;
    color: #474747;
  }

  .summary div {
    margin-top: 0.4em;
    margin-bottom: 0.6em;
  }

  .wizard {
    padding: 1em;
  }

  .error {
    margin-top: 0.4em;
    margin-bottom: 0.6em;
  }
</style>
