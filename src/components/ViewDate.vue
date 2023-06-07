<template>
  <div class="container py-5 px-3 px-sm-0 px-lg-5">
    <div class="bg-white shadow-sm rounded py-4 px-3 px-lg-5 py-lg-5">
			<div class="d-lg-flex justify-content-between align-items-center">
        <h1 class="fw-bold fs-4 mb-0">
          <router-link to="/dashboard" class="me-2"><i class="fa-solid fa-angle-left"></i></router-link>
          {{ currentProject.name }} | {{ currentLog.day }}
        </h1>
        <button class="btn-blue rounded-pill mt-3 mt-lg-0" data-bs-toggle="modal" data-bs-target="#addModal"><i class="fa-solid fa-plus me-1"></i> Add Time</button>
			</div>
      <div class="table-responsive-sm">
        <table class="table shadow-sm mt-4 daily">
          <thead class="text-center">
            <tr>
              <th>Time</th>
              <th>Description</th>
              <th>Hours</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(log, index) in currentLog.logs" :key="index">
              <td>{{ log.time }}</td>
              <td>{{ log.description }}</td>
              <td>{{ log.hours }}</td>
              <td>
                <div class="d-flex">
                  <button class="btn-transparent"><i class="fa-solid fa-pen-to-square me-1"></i></button>
                  <button class="btn-transparent"><i class="fa-solid fa-trash"></i></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <h5 class="text-center mt-4 fw-bolder text-uppercase">Total hours: 8</h5>
      </div>
			<addModal/>
		</div>
  </div>
</template>

<script>
import addModal from "./AddModal";

export default {
  name: "ViewDate",
  components: { addModal },
  data() {
    return {
      storedProjects: {},
      storedLogs: {},
      logId: null,
      currentLog: [],
      projectId: null,
      currentProject: [],
    };
  },
  mounted() {
    this.storedProjects = JSON.parse(localStorage.getItem("projects"));
    this.storedLogs = JSON.parse(localStorage.getItem("logs"));
    
    this.logId = this.$router.currentRoute._value.params.id;
    this.currentLog = this.storedLogs[this.logId - 1];

    this.currentProject = this.storedProjects[this.currentLog.project_id - 1];
  },
};
</script>