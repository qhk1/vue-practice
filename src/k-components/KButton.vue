<template>
  <button class="k-button" :class="[mySize, myType, myRound, myCirle, myLoading, myDisabled, myPlain, myText]">
    <i :class="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "KButton",
  props: {
    size: String,
    type: String,
    round: String,
    circle: String,
    loading: String,
    disabled: String,
    icon: String,
    plain: String,
    text: String,
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

    myType: function () {
      const type = {
        primary: "primary",
        success: "success",
        warning: "warning",
        danger: "danger",
        info: "info",
        default: "default",
      };
      const temp = type[this.type];
      if (temp) {
        return temp;
      }
      return type.default;
    },

    myRound: function () {
      const type = {
        true: "round1",
        false: "round2",
      };
      const temp = type[this.round];
      if (temp) {
        return temp;
      } else {
        return type.false;
      }
    },

    myCirle: function () {
      const type = {
        true: "circle1",
        false: "circle2",
      };
      const temp = type[this.circle];
      if (temp) {
        return temp;
      } else {
        return type.false;
      }
    },
    myLoading: function () {
      const type = {
        true: "loading1",
        false: "loading2",
      };
      const temp = type[this.loading];
      if (temp) {
        return temp;
      } else {
        return type.false;
      }
    },
    myDisabled: function () {
      const type = {
        true: "disabled1",
        false: "disabled2",
      };
      const temp = type[this.disabled];
      if (temp) {
        return temp;
      } else {
        return type.false;
      }
    },
    myPlain: function () {
      const type = {
        true: "plain1",
        false: "plain2",
      };
      const temp = type[this.plain];
      if (temp) {
        return temp;
      } else {
        return type.false;
      }
    },
    myText: function () {
      const type = {
        true: "text1",
        false: "text2",
      };
      const temp = type[this.text];
      if (temp) {
        return temp;
      } else {
        return type.false;
      }
    },
  },
  mounted() {
    console.log(this.props, this);
  },
};
</script>

<style scoped lang="scss">
//size
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

//type
.primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover {
    opacity: 0.8;
  }
}
.success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover {
    opacity: 0.8;
  }
}
.warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover {
    opacity: 0.8;
  }
}
.danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover {
    opacity: 0.8;
  }
}
.info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover {
    opacity: 0.8;
  }
}
.default {
  color: #606266;
  background-color: #fff;
  border-color: #909399;
  &:hover {
    opacity: 0.8;
  }
}

//round  样式会被circle覆盖
.round1 {
  border-radius: 30px;
}
.round2 {
  border-radius: 4px;
}

//circle
.circle1 {
  border-radius: 50%;
}
.circle2 {
  border-radius: 4px;
}

//loading
.loading1 {
  opacity: 0.5;
}
.loading2 {
  opacity: 1;
}

//disabled
.disabled1 {
  opacity: 0.5;
  cursor: no-drop !important;
}
.disabled2 {
  opacity: 1;
}

//plain
.plain1 {
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
}
.plain2 {
  opacity: 1;
}

//text 
.text1 {
  background-color: none !important;
  border: 0px solid white !important;
  opacity: 0.5;
}
.text2 {
  
}

.k-button {
  cursor: pointer;
}
.k-button + .k-button {
  margin-left: 10px;
}
</style>
