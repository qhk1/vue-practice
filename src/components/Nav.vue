<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <router-link to="/button">button按钮</router-link>
            <!-- <span slot="title">导航一</span> -->
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <!-- <span slot="title">导航二</span> -->
            <router-link to="/InputPage">input输入框</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <router-link to="/RadioPage">Radio 单选框</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <router-link to="/CheckboxPage">Checkbox 多选框</router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <router-link to="/SelectPage">Select 选择器</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>