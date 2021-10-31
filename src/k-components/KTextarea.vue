<template>
  <div>
    <textarea cols="30" rows="10"></textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    rows: {
      type: Number,
      default: 10,
    },
    cols: {
      type: Number,
      default: 30,
    },
  },

  components: {},
  methods: {},
  name: "KTextarea",

  computed: {
    myDisabled: function () {
      const type = {
        true: "disabled1",
        false: "disabled2",
      };
      const temp = type[this.disabled];
      if (temp) {
        return temp;
      }
      return type.false;
    },
  },
  mounted: {},
};
</script>
<style lang="scss">
</style>