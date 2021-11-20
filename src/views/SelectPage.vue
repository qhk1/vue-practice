<template>
  <div>
    <h1>Select 选择器</h1>
    <p>当选项过多时，使用下拉菜单展示并选择内容</p>
    <ComponentLayout>
      <template v-slot:title> 基础用法 </template>
      <template v-slot:desc>适用广泛的基础单选</template>
      <KSelect :label="selectLabel"></KSelect>
      <template v-slot:el-demo>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
    </ComponentLayout>
  </div>
</template>
<script>
import KSelect from "../k-components/KSelect";
import ComponentLayout from "../components/ComponentLayout.vue";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      selectLabel: ["黄金糕", "双皮奶", "蚵仔煎", "龙须面", "北京烤鸭"],
      value: "",
    };
  },
  components: {
    ComponentLayout,
    KSelect,
  },
  methods: {},
};
</script>
<style lang="scss">
</style>