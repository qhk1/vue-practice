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
      <KInput placeholder="请输入内容" maxlength="8"></KInput>
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
      <KInput placeholder="请输入内容" :type="showPassword"></KInput>
      <button @mouseenter="changePassword1()" @mouseleave="changePassword2()">
        显示密码
      </button>
      <template v-slot:el-demo>
        <el-input
          placeholder="请输入密码"
          v-model="input"
          show-password
        ></el-input>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> 文本域 </template>
      <template v-slot:desc></template>
      <!-- <KTextarea ></KTextarea> -->
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
  },
};
</script>
<style lang="scss">
</style>