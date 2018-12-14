<template>
  <div>
    <el-form ref="form" :model="form" label-width="250px">

      <el-form-item>
        <el-alert v-for="(error, index) in errors" :key="index" :title="error" type="error" show-icon class="error">
        </el-alert>
      </el-form-item>

      <el-form-item label="Tell us how do we call you">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Some e-mail will be appreciated too">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" @keyup.enter.native="onSubmit">
          OK take me forward
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

  // Form objects
  import {EmployeeBasicsForm} from './employee-domain'

  export default {
    data() {
      return ({
        errors: [],
        form: new EmployeeBasicsForm()
      })
    },
    methods: {
      onSubmit() {
        this.errors = this.form.validate();
        if (this.errors.length === 0) {
          this.$emit('employeeBasicsFormSubmit', this.form);
        }
      }
    },
  }

</script>
