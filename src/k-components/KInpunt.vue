<template>
  <div>
    <input
      :type="type"
      class="k-input"
      :placeholder="placeholder"
      :disabled="disabled == 'true' ? true : false"
      :class="[myDisabled, mySize]"
      :maxlength="maxlength"
      :style="`height: ${this.row * 40}px;`"
      v-model="textInput"
      v-on:focus="changeLog()"
      v-on:blur="changedemo()"
    />
    <!-- 输入长度限制 -->
    <span class="input-span" v-if="maxlength"
      >{{ textInput.length }}/{{ maxlength }}</span
    >
    <!-- 可清空 -->
    <i
      class="el-icon-circle-close"
      @click="clearText()"
      v-if="clearable && this.textInput.length"
      style="
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0.4;
        cursor: pointer;
      "
    ></i>
    <!-- 密码框 -->
    <i
      class="el-icon-view"
      @mouseenter="readPassword()"
      @mouseleave="closePassword()"
      v-if="showPassword && this.textInput.length"
      style="
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0.4;
        cursor: pointer;
      "
    ></i>
    <!-- 带icon的输入框 -->
    <i
      class="el-icon-date"
      v-if="showIcon"
      style="
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0.4;
        cursor: pointer;
      "
    ></i>
      <div v-if="showSelect && showSelect2" class="input-select">
      <ul>
        <li v-for="(item, index) in getSelect2" :key="index">
          <p>{{ item }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "清空",
      textInput: "",
      selectList: ["三全鲜食（北新泾店）", "Hot honey 首尔炸鸡（仙霞路）", "新旺角茶餐厅", "泷千家(天山西路店)", "胖仙女纸杯蛋糕（上海凌空店）", "贡茶", "豪大大香鸡排超级奶爸", "茶芝兰（奶茶，手抓饼）", "十二泷町", "星移浓缩咖啡", "阿姨奶茶/豪大大", "新麦甜四季甜品炸鸡", "Monica摩托主题咖啡店", "浮生若茶（凌空soho店）", "NONO JUICE  鲜榨果汁", "CoCo都可(北新泾店）", "快乐柠檬（神州智慧店）", "猫山王（西郊百联店）", "枪会山", "爱茜茜里(西郊百联)"],
      qqq: "red",
      showSelect2: false,
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
    showPassword: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },

    showSelect: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Number,
      default: 1,
    },
    measure: {
      type: String,
      default: "normal",
    },
  },
  components: {},
  methods: {
    clearText() {
      this.textInput = "";
    },
    readPassword() {
      this.type = "text";
    },
    closePassword() {
      this.type = "password";
    },
    changeLog() {
      this.showSelect2 = true;
    },
    changedemo() {
      this.showSelect2 = false;
    },
    // 模糊查询操作数组
    // getSelect() {
    //   let newList = this.selectList2.filter(item=> item.indexOf(this.textInput) > -1);
    //   this.selectList1 = newList;
    // },
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
    mySize: function () {
      const type = {
        normal: "normal",
        medium: "medium",
        small: "small",
        mini: "mini",
      };
      const temp = type[this.measure];
      if (temp) {
        return temp;
      }
      return "";
    },
    getSelect2() {
      return this.selectList.filter(item => item.indexOf(this.textInput) > -1);
    }
  },
  mounted() {},
};
</script>
<style lang="scss">
div {
  position: relative;
}

.k-input {
  background-color: #fff;
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
//szie
.normal {
  width: 250px;
}
.medium {
  width: 200px;
}
.small {
  width: 150px;
}
.mini {
  width: 100px;
}
.input-span {
  position: absolute;
  top: 0;
  right: 10px;
  height: 100%;
  display: inline-flex;
  align-items: center;
  color: #909399;
  font-size: 14px;
  transition: all 0.3s;
}
.input-select {
  max-width: 250px;
  max-height: 280px;
  background-color: #a8a1a148;
  overflow: auto;
  border-radius: 5px;
  ul {
    width: 100%;
    height: 100%;
    text-align: left;
    margin-left: -35px;
    li {
      width: 100%;
      height: 40px;
      overflow: hidden;
      text-align: left;
      &:hover {
        background-color: #eceaea;
      }
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>