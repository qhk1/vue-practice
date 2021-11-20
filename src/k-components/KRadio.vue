<template>
  <div>
    <input
      type="radio"
      class="radio_type"
      :class="opacityId == 1 ? 'active' : ''"
      id="radio1"
      v-model="input"
      v-on:focus="changeLog()"
      v-on:blur="changedemo()"
    />
    <label class="label-input" :class="opacityId == 1 ? 'active' : ''" for="radio1">备选框</label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      opacityId: 0,
    };
  },
  props: {},

  components: {},
  methods: {
    changeLog() {
      this.opacityId = 1;
    },
    changedemo() {
      this.opacityId = 0;
    }
  },

  computed: {},
  mounted: {},
};
</script>
<style lang="scss">
div {
  position: relative;
}
.radio_type {
  border: 1px solid #fff;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  cursor: pointer;
  box-sizing: border-box;
  opacity: 0.3;
  &.active {
    opacity: 1;
  }
}
.label-input {
  position: absolute;
  font-size: 14px;
  padding-left: 10px;
  cursor: pointer;
  color: #606266;
  &.active {
    color: #409eff;
  }
}
</style>