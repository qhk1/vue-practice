<template>
  <div>
    <input
      class="k-select"
      type="text"
      placeholder="请选择"
      :class="onFocus ? 'active' : ''"
      v-on:focus="changeLog()"
      v-model="textInput"
      v-on:blur="changeBlur()"
      @click="changeIcon()"
    />
    <i
      class="el-icon-arrow-down"
      :class="rotateIcon ? 'active' : ''"
      @click="changeIcon()"
    ></i>
      <div v-if="onFocus" class="downMenu">
      <ul>
        <li v-for="(item, index) in label" :key="index" @mouseenter="changeText(item)">
          <p>{{item}}</p>
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
      textInput: ""
      
    };
  },
  props: {
    label: Array,
  },

  components: {},
  methods: {
    changeIcon() {
      if (this.rotateIcon) {
        this.rotateIcon = false;
      } else {
        this.rotateIcon = true;
      }
      this.onFocus == true ? (this.onFocus = false) : (this.onFocus = true);
    },
    changeLog() {
      // this.onFocus = true;
    },
    changeBlur() {
      this.onFocus = false;
      this.rotateIcon = false;
    },
    changeText(item) {
      this.textInput = item;
    }
  },

  computed: {},
  mounted() {},
};
</script>
<style lang="scss">
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
    &::placeholder {
      color: #c3c4cc;
      font-size: 14px;
    }
    &.active {
      border: 1px solid #409eff;
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
  }
  .downMenu {
    min-width: 217px;
    min-height: 240px;
    position: absolute;
    background-color: #e0d8d8;
    padding: 0;
    // transform-origin: center top;
    z-index: 999;
    ul {
      width: 81%;
      height: 210px;
      li {
        width: 100%;
        height: 34px;
        list-style: none;
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
      }
    }
  }
}
</style>