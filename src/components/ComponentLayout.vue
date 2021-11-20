<template>
  <div>
    <h3 class="title">
      <slot name="title"></slot>
    </h3>
    <p class="desc">
      <slot name="desc" style="display:flex"></slot>
    </p>
    <div class="demo-block">
      <slot></slot>
      <div class="el-demo-block">
        <slot name="el-demo"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentLayout",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  margin: 55px 0 20px;
  font-weight: 400;
  color: #1f2f3d;
  font-size: 22px;
}
.desc {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
.demo-block {
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
}
.el-demo-block {
  padding-top: 18px;
  margin-top: 18px;
  border-top: 1px solid #ebebeb;
}
</style>
