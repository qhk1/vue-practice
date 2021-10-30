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

      <template v-slot:desc> 调整Button的尺寸。 </template>

      <KButton size="medium">medium</KButton>
      <KButton size="small">small</KButton>
      <KButton size="mini">mini</KButton>

      <template v-slot:el-demo>
        <el-button size="medium">medium</el-button>
        <el-button size="small">small</el-button>
        <el-button size="mini">mini</el-button>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> Button type </template>
      <template v-slot:desc> 调整Button的类型。 </template>
      <KButton type="primary">primary</KButton>
      <KButton type="success">success</KButton>
      <KButton type="warning">warning</KButton>
      <KButton type="danger">danger</KButton>
      <KButton type="info">info</KButton>    
      <template v-slot:el-demo>
      <el-button type="primary">primary</el-button>
      <el-button type="success">success</el-button>
      <el-button type="warning">warning</el-button>
      <el-button type="danger">danger</el-button>
      <el-button type="info">info</el-button>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> Button plain </template>
      <template v-slot:desc> 调整Button是否朴素。 </template>    
      <KButton plain="true" type="primary">primary</KButton>
      <KButton plain="true" type="success">success</KButton>
      <template v-slot:el-demo>
      <el-button type="primary" plain>primary</el-button>
      <el-button type="success" plain>success</el-button>
      <el-button type="warning" plain>warning</el-button>
      <el-button type="danger" plain>danger</el-button>
      <el-button type="info" plain>info</el-button>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> Button round </template>
      <template v-slot:desc> 调整Button是否圆角。 </template> 
      <KButton round="true" type="primary">round</KButton>
      <KButton round="false" type="primary">round</KButton>
      <template v-slot:el-demo>
      <el-button type="primary" round>round</el-button>
      <el-button type="primary">round</el-button>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> Button circle </template>
      <template v-slot:desc> 调整Button是否圆形。 </template> 
      <KButton circle="true">圆</KButton>
      <KButton type="primary" circle="true">圆</KButton>
      <template v-slot:el-demo>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> Button loading </template>
      <template v-slot:desc> 调整Button是否加载中。 </template> 
      <KButton loading="true"><i class="el-icon-loading"></i>加载中</KButton>
      <KButton type="primary" circle="false"><i class="el-icon-loading"></i>加载中</KButton>
      <template v-slot:el-demo>
      <el-button :loading="true">加载中</el-button>
      <el-button type="primary" :loading="true">加载中</el-button>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> Button disabled </template>
      <template v-slot:desc> 调整Button是否禁用。 </template> 
      <KButton disabled="true">禁用中</KButton>
      <KButton type="primary" disabled="true">禁用中</KButton>
      <template v-slot:el-demo>
      <el-button disabled>禁用中</el-button>
      <el-button type="primary" disabled>禁用中</el-button>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> Button icon </template>
      <template v-slot:desc> 调整Button图标类型。 </template> 
      <KButton type="primary" icon="el-icon-edit"></KButton>
      <KButton type="primary" icon="el-icon-delete"></KButton>
      <template v-slot:el-demo>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      </template>
    </ComponentLayout>

    <ComponentLayout>
      <template v-slot:title> Button text </template>
      <template v-slot:desc> 调整Button为纯文本按钮。 </template> 
      <KButton text="true">文字按钮</KButton>
      <KButton text="false" disabled="true">文字按钮</KButton>
      <template v-slot:el-demo>
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
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