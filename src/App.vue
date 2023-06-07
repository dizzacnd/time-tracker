<template>
  <appNavbar v-if="!isHomePage"/> <!-- Show navbar on internal pages -->
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import appNavbar from "./components/AppNavbar";

export default {
  name: 'App',
  components: { appNavbar },
  computed:{
    isHomePage() {
      return  this.$route.path==='/'
    }
  }
}
</script>
