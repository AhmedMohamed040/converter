<template>
  <div class="home .container-fluid">
    <div class="row">
      <SdBar class="col-md-3 sd-bar" />
      <TheMain class="col-md-9  t-main" />
    </div>
  </div>
</template>

<script defer>
// @ is an alias to /src
import SdBar from "@/components/SdBar.vue";
import TheMain from "@/components/TheMain.vue";

export default {
  name: "HomeView",
  components: {
    SdBar,
    TheMain,
  },
};
</script>
<style scoped lang="scss">
@import "@/style/Home.scss";
</style>
