<template>
  <div class="element">
    <div class="element-header">
      <div class="title"></div>
    </div>
    <div class="element-body">
      <div class="element-body-left">
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
                <router-link to="/nav1">导航一</router-link>
                <!-- <span slot="title">导航一</span> -->
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <!-- <span slot="title">导航二</span> -->
                <router-link to="/nav2">导航二</router-link>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="element-body-right"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

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
<style scoped lang="scss">
.element {
  width: 100rem;
  height: 100rem;
  .element-header {
    width: 100%;
    height: 8rem;
    // background-color: red;
    .title {
      width: 20%;
      height: 100%;
      background: url("../static/title.png") no-repeat;
      background-size: 100% 100%;
    }
  }
  .element-body {
    display: flex;
    width: 100%;
    height: 100%;
    .element-body-left {
      width: 20%;
      height: 100%;
      // background-color: black;
    }
    .element-body-right {
      width: 80%;
      height: 100%;
      background-color: yellow;
    }
  }
}
</style>
