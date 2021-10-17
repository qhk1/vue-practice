<template>
  <div class="element">
    <div class="element-header">
      <div class="title"></div>
    </div>
    <div class="element-body">
      <div class="element-body-left">
        <Nav></Nav>
      </div>
      <div class="element-body-right"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "../components/Nav";
export default {
  components: {
    Nav,
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
