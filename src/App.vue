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
    // Sample Data
    var projects = [{"id":"1", "name":"Project ABC"}, {"id":"2", "name":"Project DEF"}, {"id":"3", "name":"Project JHI"}];
    var weeks = [{"id":"1", "name":"Week 1"}, {"id":"2", "name":"Week 2"}, {"id":"3", "name":"Week 3"}];
    

    // Store sample data to local storage
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("weeks", JSON.stringify(weeks));
  }
}
</script>
