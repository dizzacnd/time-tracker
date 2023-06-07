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
  },
  mounted() {
    var projects = [{"id":"1", "name":"Project ABC"}, {"id":"2", "name":"Project DEF"}, {"id":"3", "name":"Project JHI"}];
    var logs = [{"id":"1", "day":"Monday", "hours": 8}, {"id":"2", "day":"Tuesday", "hours": 8}];

    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("logs", JSON.stringify(logs));
  }
}
</script>
