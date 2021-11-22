<template>
  <div>
    <input
      class="k-select"
      type="text"
      placeholder="请选择"
      :disabled="disabled == 'true' ? true : false"
      :class="[onFocus ? 'active' : '', disabled == 'true' ? 'disInput' : '']"
      v-on:focus="changeLog()"
      v-model="textInput"
      v-on:blur="changeBlur()"
      @click="changeIcon()"
    />
    <i
      class="el-icon-arrow-down"
      :class="[rotateIcon ? 'active' : '', disabled == 'true' ? 'disIcon' : '']"
      @click="changeIcon()"
      v-if="textInput.length == 0"
    ></i>
    <i v-if="textInput.length > 0" class="el-icon-circle-close" @click="deleteIcon"></i>
    <!-- <div class="downMenu"> -->
    <div v-if="onFocus" class="downMenu">
      <ul>
        <li
          v-for="(item, index) in label"
          :key="index"
          :class="item.disabled ? 'active' : ''"
          @mouseenter="changeText(item)"
        >
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rotateIcon: false,
      onFocus: false,
      textInput: [],
    };
  },
  props: {
    label: Array,
    disabled: {
      type: String,
      default: "false",
    },
  },

  components: {},
  methods: {
    changeIcon() {
      if (this.disabled == "true") {
        return;
      } else {
        if (this.rotateIcon) {
          this.rotateIcon = false;
        } else {
          this.rotateIcon = true;
        }
        this.onFocus == true ? (this.onFocus = false) : (this.onFocus = true);
      }
    },
    changeLog() {
      // this.onFocus = true;
    },
    changeBlur() {
      this.onFocus = false;
      this.rotateIcon = false;
    },
    changeText(item) {
      if (item.disabled == true) {
        this.textInput = "";
      } else {
        this.textInput.push(item.name);
      }
    },
    deleteIcon() {
      this.textInput.pop();
    }
  },

  computed: {},
  mounted() {},
};
</script>
<style lang="scss">
@import "../assets/mixin";
div {
  position: relative;
  .k-select {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 217.5px;
    overflow: auto;
    &::placeholder {
      color: #c3c4cc;
      font-size: 14px;
    }
    &.active {
      border: 1px solid #409eff;
    }
    &.disInput {
      background: #f5f7fa;
      cursor: not-allowed;
    }
  }
  .el-icon-arrow-down {
    position: absolute;
    left: 195px;
    top: 14px;
    color: #c0c4cc;
    font-size: 14px;
    transition: transform 0.3s;
    cursor: pointer;
    &.active {
      transform: rotate(-180deg);
    }
    &.disIcon {
      cursor: not-allowed;
    }
  }
  .el-icon-circle-close {
    position: absolute;
    left: 195px;
    top: 14px;
    opacity: 0.5;
  }
  .downMenu {
    min-width: 217px;
    min-height: 240px;
    position: absolute;
    background-color: #dfdfdf;
    top: 55px;
    border: 1px solid #fff;
    padding: 0;
    z-index: 999;
    ul {
      width: 100%;
      height: 240px;
      padding: 0;
      margin: 0;
      li {
        width: 207px;
        height: 34px;
        list-style: none;
        padding-left: 10px;
        p {
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #606266;
          height: 34px;
          line-height: 34px;
          cursor: pointer;
        }
        &:hover {
          background-color: rgb(167, 163, 163);
        }
        &.active {
          cursor: not-allowed;
          p {
            color: #c4c4cf;
            cursor: not-allowed;
          }
          &:hover {
            background: #dfdfdf;
          }
        }
      }
    }
  }
}
</style>