<template>
  <div class="container py-5 px-3 px-sm-0 px-lg-5">
    <h1 class="fw-bold fs-2 mb-4 text-uppercase">My Timesheet</h1>
    <div class="bg-white shadow-sm rounded py-4 px-3 px-lg-5 py-lg-5">
      <div class="d-md-flex align-items-center justify-content-between">
        <div class="col-lg-9 col-xl-6 d-md-flex">
          <select class="form-select">
            <option v-for="(project, index) in storedProjects" :key="index" value="project.id" :selected="project.name==1">{{ project.name }}</option>
          </select>
          <div class="d-flex col-12 col-md-6 ms-md-3 mt-3 mt-md-0">
            <select class="form-select me-3">
              <option v-for="(week, index) in storedWeeks" :key="index" value="week.id" :selected="week.id==3">{{ week.name }}</option>
            </select>
            <!-- <select class="form-select year">
              <option value="">2022</option>
              <option value="" selected>2023</option>
            </select> -->
          </div>
        </div>
        <button class="btn-blue rounded-pill mt-3 mt-md-0" data-bs-toggle="modal" data-bs-target="#addModal"><i class="fa-solid fa-plus me-1"></i> Add Time</button>
      </div>
      <table class="table shadow-sm mt-4 weekly">
        <thead>
          <tr>
            <th>Date</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(log, index) in storedLogs" :key="index">
            <td>
              <router-link :to="'/view/' + log.id">{{ log.day }}</router-link>
            </td>
            <td>{{ log.hours }}</td>
          </tr>
        </tbody>
      </table>
      <h5 class="text-center mt-4 fw-bolder text-uppercase">Total hours: 16</h5>
    </div>
    <addModal/>
  </div>
</template>

<script>
import addModal from "./AddModal";

export default {
  name: "dashboardPage",
  components: { addModal },
  data() {
    return {
      storedProjects: {},
      storedWeeks: {},
      storedLogs: {},
    };
  },
  mounted() {
    this.storedProjects = JSON.parse(localStorage.getItem("projects"));
    this.storedWeeks = JSON.parse(localStorage.getItem("weeks"));
    this.storedLogs = JSON.parse(localStorage.getItem("logs"));
  },
};
</script>