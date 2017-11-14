<template>
  <div class="register">
    <h1>{{ msg }}</h1>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input type="text" v-model="form.username" placeholder="请输入手机号" name="username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="form.password" placeholder="请输入密码" name="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="form.repassword" placeholder="请再次输入密码" name="repassword"></el-input>
      </el-form-item>
      <el-form-item class="submit">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-button type="primary" class="registerBtn">注册</el-button>
          </el-col>
          <el-col :span="12">
            <el-button class="return" v-on:click="cancle">取消</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: '注册',
      form: {
        username: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    cancle: function(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
}
.register
{
  margin: 0 auto;
  border: 1px solid #8391a5;
  margin-top: 160px;
  padding: 20px;
  width: 25%;
  box-shadow: 10px 10px 5px #999999;
  border-radius: 5px;
}
.submit{
  text-align: center;
}
.registerBtn,.return{
  width: 100%;
}
</style>
