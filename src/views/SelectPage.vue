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

    <ComponentLayout>
      <template v-slot:title> 有禁用选项 </template>
      <template v-slot:desc></template>
      <KSelect :label="selectLabel1"></KSelect>
      <template v-slot:el-demo>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >
          </el-option>
        </el-select>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 禁用状态 </template>
      <template v-slot:desc>选择器不可用状态</template>
      <KSelect disabled="true"></KSelect>
      <template v-slot:el-demo>
        <el-select v-model="value" disabled placeholder="请选择">
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

    <ComponentLayout>
      <template v-slot:title> 可清空单选 </template>
      <template v-slot:desc>包含清空按钮，可将选择器清空为初始状态</template>
      <KSelect :label="selectLabel"></KSelect>
      <template v-slot:el-demo>
        <el-select v-model="value" clearable placeholder="请选择">
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

    <ComponentLayout>
      <template v-slot:title> 基础多选 </template>
      <template v-slot:desc>适用性较广的基础多选，用 Tag 展示已选项</template>
      <KSelect :label="selectLabel"></KSelect>
      <template v-slot:el-demo>
        <el-select v-model="value1" multiple placeholder="请选择">
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

    <ComponentLayout>
      <template v-slot:title> 分组 </template>
      <template v-slot:desc>备选项进行分组展示</template>
      <KSelect :label="selectLabel"></KSelect>
      <template v-slot:el-demo>
        <el-select v-model="value" placeholder="请选择">
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-option-group>
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
      options1: [
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
          disabled: true,
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
      selectLabel: [
        { name: "黄金糕" },
        { name: "双皮奶" },
        { name: "蚵仔煎" },
        { name: "龙须面" },
        { name: "北京烤鸭" },
      ],
      selectLabel1: [
        { name: "黄金糕" },
        { name: "双皮奶" },
        { name: "蚵仔煎", disabled: true },
        { name: "龙须面" },
        { name: "北京烤鸭" },
      ],
      value: "",
      value1: "",
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