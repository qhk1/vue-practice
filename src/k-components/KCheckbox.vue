<template>
  <div>
    <input
      v-if="this.showButton == 'false'"
      type="checkbox"
      id="checkbox1"
      :disabled="disabled == 'true' ? true : false"
      :class="[input ? 'active' : '', disabled == 'true' ? 'disabled1' : '']"
      v-model="input"
      class="input-checkbox"
    />
    <label
      v-if="this.showButton == 'false'"
      for="checkbox1"
      :class="[input ? 'active' : '', disabled == 'true' ? 'disabled1' : '']"
      class="label-input"
      >{{ label }}</label
    >
    <button
      class="k-button"
      :class="clickButton ? 'active' : ''"
      v-if="this.showButton == 'true'"
      @click="changeButton()"
    >
      {{ label }}
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      clickButton: false,
    };
  },
  props: {
    disabled: String,
    label: {
      type: String,
      default: "备选框",
    },
    Kinput: {
      type: Boolean,
      default: false,
    },
    model: {
      type: String,
      default: "",
    },
    showButton: {
      type: String,
      default: "false",
    },
  },

  components: {},
  methods: {
    changeButton() {
      this.clickButton === true
        ? (this.clickButton = false)
        : (this.clickButton = true);
    },
  },

  computed: {
    myDisabled: function () {
      const type = {
        true: "disabled1",
        false: "disabled2",
      };
      const temp = type[this.disabled];
      if (temp) {
        return temp;
      }
      return type.false;
    },
  },
  mounted() {
    this.input = this.Kinput;
  },
};
</script>
<style lang="scss">
div {
  position: relative;
  cursor: pointer;
  .input-checkbox {
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    opacity: 0.3;
    cursor: pointer;
    &.active {
      opacity: 0.8;
    }
    &.disabled1 {
      cursor: not-allowed;
    }
  }
  .label-input {
    padding-left: 8px;
    font-size: 14px;
    &.disabled1 {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  .k-button {
    line-height: 1;
    font-weight: 500;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &.active {
      color: #fff;
      background-color: #409eff;
    }
  }
}
</style>