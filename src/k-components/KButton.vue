<template>
  <button class="k-button" :class="mySize">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "KButton",
  props: {
    size: String,
  },
  computed: {
    mySize: function () {
      const type = {
        medium: "medium",
        small: "small",
        mini: "mini",
      };
      const temp = type[this.size];
      if (temp) {
        return temp;
      }
      return type.medium;
    },
  },
  mounted() {
    console.log(this.props, this);
  },
};
</script>

<style scoped lang="scss">
.medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.k-button + .k-button {
  margin-left: 10px;
}
</style>
