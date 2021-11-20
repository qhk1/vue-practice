<template>
  <div>
    <h1>Radio 单选框</h1>
    <ComponentLayout>
      <template v-slot:title> 基础用法 </template>
      <template v-slot:desc></template>
      <KRadio></KRadio>
      <KRadio></KRadio>
      <template v-slot:el-demo>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </template>
    </ComponentLayout>
  </div>
</template>
<script>
import KRadio from "../k-components/KRadio";
import ComponentLayout from "../components/ComponentLayout.vue";
export default {
  data() {
    return {
      radio: "",
    };
  },
  components: {
    ComponentLayout,
    KRadio,
  },
  methods: {},
};
</script>
<style lang="scss">
</style>