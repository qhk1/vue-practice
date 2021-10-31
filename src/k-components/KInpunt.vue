<template>
  <div>
    <input
      :type="type"
      class="k-input"
      :placeholder="placeholder"
      :disabled="disabled == 'true' ? true : false"
      :class="[myDisabled]"
      :maxlength="maxlength"
      :style="`height: ${this.row * 40}px`"
      v-model="textInput"
    />
    <span class="input-span" v-if="maxlength"
      >{{ textInput.length }}/{{ maxlength }}</span
    >
    <i @click="clearShow()" v-if="clearable" class="el-icon-view"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "清空",
      textInput: "",
    };
  },
  props: {
    disabled: String,

    type: {
      type: String,
      default: "text",
    },

    placeholder: String,

    maxlength: Number,

    clearable: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Number,
      default: 1,
    },
  },
  components: {},
  methods: {
    clearShow() {
      this.$emit("clear");
    },
  },
  name: "KInput",

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
  mounted: {},
};
</script>
<style lang="scss">
div {
  position: relative;
}
.k-input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  &:active {
    border: 1px solid #3a8ee6;
  }
  &::placeholder {
    color: #c3c4cc;
  }
}

//disabled
.disabled1 {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
.disabled2 {
  cursor: text;
}
.input-span {
  position: absolute;
  top: 0;
}
</style>