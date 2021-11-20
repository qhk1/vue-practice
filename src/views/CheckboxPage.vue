<template>
  <div>
    <h1>Checkbox 多选框</h1>
    <ComponentLayout>
      <template v-slot:title> 基础用法 </template>
      <template v-slot:desc></template>
      <KCheckbox></KCheckbox>
      <template v-slot:el-demo>
        <el-checkbox v-model="checked">备选项</el-checkbox>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 禁用状态 </template>
      <template v-slot:desc></template>
      <KCheckbox disabled="true"></KCheckbox>
      <template v-slot:el-demo>
        <el-checkbox v-model="checked" disabled>备选项</el-checkbox>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 多选框组 </template>
      <template v-slot:desc></template>
      <KCheckbox label="复选框A"></KCheckbox>
      <KCheckbox label="复选框B"></KCheckbox>
      <KCheckbox label="复选框C"></KCheckbox>
      <KCheckbox label="禁用" disabled="true"></KCheckbox>
      <KCheckbox label="选中且禁用" disabled="true" :Kinput="true"></KCheckbox>
      <template v-slot:el-demo>
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> indeterminate 状态 </template>
      <template v-slot:desc></template>
      <input type="checkbox" v-model="isAll" @change="changeAll()" />全选
      <ul>
        <li v-for="(item, index) in city" :key="index" style="list-style: none">
          <input
            type="checkbox"
            v-model="checkArr"
            :value="item"
            @change="changeLi()"
          />
          {{ item }}
        </li>
      </ul>
      <template v-slot:el-demo>
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <div style="margin: 15px 0"></div>
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 可选项目数量的限制 </template>
      <template v-slot:desc></template>
      <ul>
        <li v-for="(item, index) in city" :key="index" style="list-style: none">
          <input type="checkbox" v-model="checkNum" :value="item" />
          {{ item }}
        </li>
      </ul>
      <template v-slot:el-demo>
        <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
          <el-checkbox v-for="city in cities" :label="city" :key="city">
            {{ city }}
          </el-checkbox>
        </el-checkbox-group>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 按钮样式 </template>
      <template v-slot:desc>按钮样式的多选组合。</template>
      <KCheckbox label="上海" showButton="true"></KCheckbox>
      <KCheckbox label="北京" showButton="true"></KCheckbox>
      <KCheckbox label="广州" showButton="true"></KCheckbox>
      <KCheckbox label="深圳" showButton="true"></KCheckbox>
      <template v-slot:el-demo>
        <div>
          <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button
              v-for="city in cities"
              :label="city"
              :key="city"
              >{{ city }}</el-checkbox-button
            >
          </el-checkbox-group>
        </div>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 带有边框 </template>
      <template v-slot:desc></template>
      <KCheckbox label="备选框1"></KCheckbox>
      <template v-slot:el-demo>
        <el-checkbox v-model="checked1" label="备选项1" border></el-checkbox>
        <el-checkbox v-model="checked2" label="备选项2" border></el-checkbox>
      </template>
    </ComponentLayout>
  </div>
</template>
<script>
import KCheckbox from "../k-components/KCheckbox.vue";
import ComponentLayout from "../components/ComponentLayout.vue";
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checked: false,
      checked1: false,
      checked2: false,
      checkAll: false,
      checkNum: [],
      checkboxGroup1: ["上海"],
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      city: ["上海", "北京", "广州", "深圳"],
      isAll: "",
      checkArr: [],
    };
  },
  components: {
    ComponentLayout,
    KCheckbox,
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    changeAll() {
      if (this.isAll) {
        this.checkArr = this.city;
      } else {
        this.checkArr = [];
      }
    },
    changeLi() {
      if (this.checkArr.length == this.city.length) {
        this.isAll = true;
      } else {
        this.isAll = false;
      }
    },
  },
};
</script>
<style lang="scss">
</style>