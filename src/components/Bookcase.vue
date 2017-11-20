<template>
<div>
  <head-component activeIndex="1"></head-component>
  <div class="line"></div>
  <el-row>
    <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/logo.png" class="image" height=250>
        <div style="padding: 14px;">
          <el-tooltip class="item" effect="dark" content="书籍简介" placement="top-start">
            <span>斗破苍穹</span>
          </el-tooltip>
          <div class="hot">
            <el-rate v-model="score" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
          </div>
          <div class="bottom clearfix">
            <time class="time">上传时间</time>
            <el-button type="text" class="button">删除</el-button>
            <el-button type="text" class="button">下载</el-button>
          </div>
        </div>
  </el-card>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'Bookcase',
  data () {
    return {
      score: 2,
      currentDate: new Date()
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.line{
  padding:5px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
