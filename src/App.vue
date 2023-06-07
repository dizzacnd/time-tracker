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
    var logs = [{
        "id":"1", 
        "project_id":"1", 
        "day":"Monday", 
        "hours": 8,
        logs: [{
          "time": "8:00AM - 12:00PM",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "hours": 4
        }, {
          "time": "1:00PM - 5:00PM",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "hours": 4
        }]
      }, {
        "id":"2", 
        "project_id":"1", 
        "day":"Tuesday", 
        "hours": 8,
        logs: [{
          "time": "8:00AM - 12:00PM",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "hours": 4
        }, {
          "time": "1:00PM - 5:00PM",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "hours": 4
        }]
      }];

    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("logs", JSON.stringify(logs));
  }
}
</script>
