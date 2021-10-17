<template>
  <div>
    <ComponentLayout>
      <template v-slot:title> Button </template>

      <template v-slot:desc> 我的第一个 button demo </template>

      <KButton>demo1</KButton>

      <template v-slot:el-demo>
        <el-button plain>朴素按钮</el-button>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> Button size </template>

      <template v-slot:desc> 我的第一个 button demo </template>

      <KButton size="medium">medium</KButton>
      <KButton size="small">small</KButton>
      <KButton size="mini">mini</KButton>

      <template v-slot:el-demo>
        <el-button size="medium">medium</el-button>
        <el-button size="small">small</el-button>
        <el-button size="mini">mini</el-button>
      </template>
    </ComponentLayout>
  </div>
</template>
<script>
import KButton from "../k-components/KButton.vue";
import ComponentLayout from "../components/ComponentLayout.vue";
export default {
  components: {
    KButton,
    ComponentLayout,
  },
};
</script>
<style lang="scss">
</style>