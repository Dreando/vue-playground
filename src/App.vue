<template>
  <div id="app">
    <el-row>
      <el-col :span="2">
        <div>&nbsp;</div>
      </el-col>
      <el-col :span="20">
        <div>
          <router-view/>
        </div>
      </el-col>
      <el-col :span="2">
        <div></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
