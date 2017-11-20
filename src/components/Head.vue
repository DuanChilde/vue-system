<template>
<div id="head">
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">我的书架</el-menu-item>
  <el-menu-item index="2">推荐</el-menu-item>
  <el-menu-item index="3">关注</el-menu-item>
  <el-menu-item index="4">站内搜索</el-menu-item>
  <el-menu-item index="5">个人信息</el-menu-item>
</el-menu>
</div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {

    }
  },
  props:['activeIndex'],
  methods: {
  handleSelect(key, keyPath) {
      var destination = ''
       switch(key)
       {
          case '1':
            destination = '/user/bookcase'
            break;
          case '2':
            destination = ''
            break;
          case '3':
            destination = '/user/forcus'
            break;
          case '4':
            destination = '/user/search'
            break;
          case '5':
            destination = ''
            break;
       }
       this.$router.push({path:destination})
     }
  }
}
</script>

<style scoped>
</style>
