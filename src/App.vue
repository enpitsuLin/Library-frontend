<template>
  <v-app>
    <Appbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Appbar,
    Footer,
  },
};
</script>
<style lang="less">
html,
body {
  min-height: 600px;
  min-width: 100%;
  height: 100%;
  width: 100%;
}
</style>