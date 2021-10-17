<template>
  <div class="element">
    <div class="element-header">111</div>
    <div class="element-body">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.element {
  width: 100%;
  height: 100%;
  &-header {
    width: 100%;
    height: 3rem;
    background-color: red;
  }
  &-body {
    display: flex;
    width: 100%;
    height: 100%;
  }
}
</style>
