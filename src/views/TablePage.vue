<template>
  <div>
    <h1>Table 表格</h1>
    <p>
      用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。
    </p>
    <ComponentLayout>
      <template v-slot:title> 基础表格 </template>
      <template v-slot:desc>基础表格</template>
      <KTable :data="tableData" :label="labelList"></KTable>
      <template v-slot:el-demo>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 带斑马纹表格 </template>
      <template v-slot:desc
        >使用带斑马纹的表格，可以更容易区分出不同行的数据。</template
      >
      <KTable stripe="true" :data="tableData" :label="labelList"></KTable>
      <template v-slot:el-demo>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </template>
    </ComponentLayout>
    <ComponentLayout>
      <template v-slot:title> 带边框表格 </template>
      <template v-slot:desc></template>
      <KTable border="true" :data="tableData" :label="labelList"></KTable>
      <template v-slot:el-demo>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </template>
    </ComponentLayout>
  </div>
</template>
<script>
import ComponentLayout from "../components/ComponentLayout.vue";
import KTable from "../k-components/KTable";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      labelList: ["日期", "姓名", "地址"],
    };
  },
  components: {
    ComponentLayout,
    KTable,
  },
  methods: {},
};
</script>
<style lang="scss">
</style>