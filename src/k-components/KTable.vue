<template>
  <div class="table">
    <ul class="title-ul">
      <li class="title-li" v-for="(item, index) in label" :key="index">
        <p class="p1">{{ item }}</p>
      </li>
    </ul>
    <ul class="table-ul">
      <li
        class="table-li"
        v-for="(item, index) in data"
        :key="index"
        :class="{active:stripe === 'true' && index % 2 == 1}"
      >
        <p class="p1">{{ item.date }}</p>
        <p class="p2">{{ item.name }}</p>
        <p class="p3">{{ item.address }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    data: Array,
    label: Array,
    stripe: {
      type: String,
      default: "false",
    },
    border: {
      type: String,
      default: "false"
    }
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss">
@import "../assets/mixin";
.table {
  .title-ul {
    display: flex;
    border-bottom: 1px solid #ebeef5;
    padding: 0;
    margin: 0;
    .title-li {
      list-style: none;
      min-width: 180px;
      min-height: 30px;
      .p1 {
        font-size: 15px;
        min-width: 160px;
        font-weight: bold;
        color: #909399;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
  .table-ul {
    padding: 0;
    margin: 0;
    .table-li {
      list-style: none;
      min-width: 160px;
      min-height: 30px;
      border-bottom: 1px solid #ebeef5;
      display: flex;
      &:hover {
        background-color: #ebeef5;
      }
      .p1 {
        font-size: 14px;
        min-width: 160px;
        color: #606266;
        padding-left: 10px;
        padding-right: 10px;
      }
      .p2 {
        font-size: 14px;
        min-width: 160px;
        color: #606266;
        padding-left: 10px;
        padding-right: 10px;
      }
      .p3 {
        font-size: 14px;
        min-width: 180px;
        color: #606266;
        padding-left: 10px;
        padding-right: 10px;
      }
      &.active {
        background-color: #fafafa;
        &:hover {
        background-color: #ebeef5;
      }
      }
    }
  }
}
</style>