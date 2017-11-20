<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input type="text" v-model="form.username" placeholder="请输入手机号" name="username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="form.password" placeholder="请输入密码" name="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.checked">记住</el-checkbox>
      </el-form-item>
      <el-form-item class="submit">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-button type="primary" class="loginBtn">登录</el-button>
          </el-col>
          <el-col :span="12">
            <el-button :plain="true" class="registerBtn" v-on:click="register">注册</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '爱分享',
      form: {
        username: '',
        password: '',
        captcha:'',
        checked:false
      }

    }
  },
  methods: {
    register: function(){
      this.$router.push({path:'/register'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
}
.login
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
.loginBtn,.registerBtn{
  width: 100%;
}
</style>
