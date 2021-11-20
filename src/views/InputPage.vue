<template>
  <div>
    <h1>input</h1>
    <ComponentLayout>
      <template v-slot:title> 基础用法 </template>
      <template v-slot:desc></template>
      <KInput placeholder="请输入内容" type="text"></KInput>
      <template v-slot:el-demo>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 禁用状态 </template>
      <template v-slot:desc></template>
      <KInput disabled="true" placeholder="请输入内容"></KInput>
      <template v-slot:el-demo>
        <el-input placeholder="请输入内容" :disabled="true"></el-input>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title>输入长度限制</template>
      <template v-slot:desc></template>
      <KInput placeholder="请输入内容" :maxlength="8"></KInput>
      <template v-slot:el-demo>
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="input"
          :maxlength="10"
          show-word-limit
        >
        </el-input>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 可清空 </template>
      <template v-slot:desc></template>
      <KInput placeholder="请输入内容" clearable></KInput>
      <template v-slot:el-demo>
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="input"
          clearable
        >
        </el-input>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 密码框 </template>
      <template v-slot:desc></template>
      <KInput placeholder="请输入内容" type="password" showPassword></KInput>
      <template v-slot:el-demo>
        <el-input
          placeholder="请输入密码"
          v-model="input"
          show-password
        ></el-input>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 带 icon 的输入框 </template>
      <template v-slot:desc>带有图标标记输入类型</template>
      <KInput placeholder="请选择日期" type="text" showIcon></KInput>
      <template v-slot:el-demo>
        <el-input
          placeholder="请选择日期"
          suffix-icon="el-icon-date"
          v-model="input"
        >
        </el-input>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 文本域 </template>
      <template v-slot:desc></template>
      <textarea
        cols="155"
        rows="3"
        placeholder="请输入内容"
        class="textShow"
      ></textarea>
      <template v-slot:el-demo>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="input"
        >
        </el-input>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 尺寸 </template>
      <template v-slot:desc></template>
      <div class="size-kInput">
        <KInput
          placeholder="请输入内容"
          type="text"
          measure="normal"
          showIcon
        ></KInput>
        <KInput
          placeholder="请输入内容"
          type="text"
          measure="medium"
          showIcon
        ></KInput>
        <KInput
          placeholder="请输入内容"
          type="text"
          measure="small"
          showIcon
        ></KInput>
        <KInput
          placeholder="请输入内容"
          type="text"
          measure="mini"
          showIcon
        ></KInput>
      </div>
      <template v-slot:el-demo>
        <div class="size-elInput">
          <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input"
          >
          </el-input>
          <el-input
            size="medium"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input"
          >
          </el-input>
          <el-input
            size="small"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input"
          >
          </el-input>
          <el-input
            size="mini"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input"
          >
          </el-input>
        </div>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 带输入建议 </template>
      <template v-slot:desc></template>
      <KInput
        placeholder="请输入内容"
        type="text"
        showSelect
      ></KInput>
      <template v-slot:el-demo>
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete>
      </template>
    </ComponentLayout>
  </div>
</template>
<script>
import KInput from "../k-components/KInpunt.vue";
// import KTextarea from "../k-components/KTextarea.vue";
import ComponentLayout from "../components/ComponentLayout.vue";
export default {
  data() {
    return {
      input: "",
      inputText: "",
      state1: "",
      showPassword: "password",
      textarea: "",
    };
  },
  components: {
    ComponentLayout,
    KInput,
    // KTextarea,
  },
  methods: {
    handleClick() {
      this.inputText = "";
    },
    changePassword1() {
      this.showPassword = "text";
    },
    changePassword2() {
      this.showPassword = "password";
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>
<style lang="scss">
.textShow {
  border: 1px solid #dcdfe6;
  border-radius: 5px;
}
.size-kInput {
  display: flex;
}
.size-elInput {
  display: flex;
  width: 600px;
}
</style>